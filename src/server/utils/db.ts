import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const uri = process.env.DATABASE_URL ?? 'mongodb://localhost:27017'

export const connect = () => {
    return mongoose.connect(uri)
}