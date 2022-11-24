import { Response, Request } from "express";
import { User } from "../../../shared/types";
import oktaClient from '../services/authentication/oktaClient';

const createUser = async(req: Request, res: Response): Promise<void> => {
    console.log('Called createUser');
    
    try {
        const body = req.body as User
        console.log('Req body: ', body);
        console.log('orgUrl:', process.env.OKTA_ORG_URL);
        console.log('token:', process.env.OKTA_TOKEN);
            
        
        

        await oktaClient.createUser({
            profile: {
                firstName: body.firstName,
                lastName: body.lastName,
                email: body.email,
                login: body.email
            },
            credentials: {
                password: {
                    value: body.password
                }
            }
        }).catch(console.error)

        // res.status(200).json({ message: 'User Created' }).redirect('/')
        res.status(302).json({ message: 'User created' }).redirect('/')
    } catch(error) {
        throw error
    }
}

export { createUser }