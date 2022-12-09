require('dotenv').config()
import jwt from 'jsonwebtoken'
import UserModel from '../../user/user.model'
import { User } from '../../../../shared/types'
import config from '../../../config'


export const newToken = (user: User) => {
    return jwt.sign({ id: user.id }, config.secrets.jwt, {
        expiresIn: config.secrets.jwtExp
    })
}

export const verifyToken = (token: any) => {
    console.log('Verify Token', token);
    
    new Promise((resolve, reject) => {
        jwt.verify(token, config.secrets.jwt, (err: any, payload: any) => {
            if (err) return reject(err)
            return resolve(payload)
        })
    })
}

export const signup = async(req: any, res: any) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).send({ message: 'Email and password required' })
    }

    try {
        const user = await UserModel.create(req.body)
        const token = newToken(user)
        return res.status(201).send({ token })
    } catch (error) {
        console.error(error)
        return res.status(400).end()
    }
}

export const signin = async(req: any, res: any) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).send({ message: 'Email and password required' })
    }

    const user = await UserModel.findOne({ email: req.body.email }).exec()

    if (!user) {
        return res.status(401).send({ message: 'Not auth' })
    }

    try {
        const match = await user.checkPassword(req.body.password)
        
        if (!match) {
            return res.status(401).send({ message: 'Password does not match' })
        }

        console.log('User: ', user);

        const token = newToken(user)
        return res.status(201).send({ token: token, user: user })
    } catch (error) {
        console.error(error)
        return res.status(401).send({ message: 'Not auth' })
    }
}

export const protect = async(req: any, res: any, next: any) => {
    if (!req.headers.authorization) {
        console.log('Header', req.headers);
        
        return res.status(401).send({ message: 'no auth' })
    }

    console.log('Header Authorization', req.headers);
    
    let token = req.headers.authorization.split('Bearer ')[1]
    if (!token) {
        console.log('Header Token', req.header);
        
        return res.status(401).send({ message: 'no auth token' })
    }

    console.log('Token before verification', token);
    

    try {
        const payload = await verifyToken(token) as unknown as User
        console.log('Payload', payload);
        
        const user = await UserModel.findById(payload.id).select('-password').lean().exec()
        req.user = user
        next()
    } catch (error) {
        console.error(error)
        return res.status(401).send({ message: 'no auth' })
    }
}