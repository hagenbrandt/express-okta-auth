import jwt from 'jsonwebtoken'
import UserModel from '../../user/user.model'
import { User } from '../../../../shared/types'
import config from '../../../config'
import responseStatus from '../../../utils/responseStatus'


export const newToken = (user: User) => {
    return jwt.sign({ id: user._id }, config.secrets.jwt, {
        expiresIn: config.secrets.jwtExp
    })
}

export const verifyToken = async (token: string) => {   
    try {
        return await jwt.verify(token, config.secrets.jwt, (error: any, payload: any) => {
                if (error) {
                    throw error
                }
    
                return payload
            })
    } catch (error) {
        throw error
    }
}

export const signup = async(req: any, res: any) => {
    if (!req.body.email || !req.body.password) {
        return res.status(responseStatus.badRequest).send({ message: 'Email and password required' })
    }

    try {
        const user = await UserModel.create(req.body)
        const token = newToken(user)

        return res.status(responseStatus.created).send({ token })
    } catch (error) {
        console.error(error)

        return res.status(responseStatus.badRequest).end()
    }
}

export const signin = async(req: any, res: any) => {
    if (!req.body.email || !req.body.password) {
        return res.status(responseStatus.badRequest).send({ message: 'Email and password required' })
    }

    const user = await UserModel.findOne({ email: req.body.email }).exec()

    if (!user) {
        return res.status(responseStatus.unauthorized).send({ message: 'Not auth' })
    }

    try {
        const match = await user.checkPassword(req.body.password)
        
        if (!match) {
            return res.status(responseStatus.unauthorized).send({ message: 'Password does not match' })
        }

        const token = newToken(user)

        return res.status(responseStatus.created).send({ token: token, user: user })
    } catch (error) {
        console.error(error)

        return res.status(responseStatus.unauthorized).send({ message: 'Not auth' })
    }
}

export const protect = async(req: any, res: any, next: any) => {
    if (!req.headers.authorization) {
        return res.status(responseStatus.unauthorized).send({ message: 'no auth' })
    }

    const token = req.headers.authorization.split('Bearer ')[1]
    if (!token) {
        return res.status(responseStatus.unauthorized).send({ message: 'no auth token' })
    }
    
    try {
        const payload = await verifyToken(token) as unknown as User
        const user = await UserModel.findById(payload.id).select('-password').lean().exec()
        
        req.user = user
        
        next()
    } catch (error) {
        console.error(error)
        
        return res.status(responseStatus.unauthorized).send({ message: 'no auth' })
    }
}