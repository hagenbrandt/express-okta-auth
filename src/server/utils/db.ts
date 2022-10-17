import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const uri = process.env.MONGODB_CLOUD ?? 'mongodb://localhost:27017'

export const connect = () => {
  return mongoose.connect(uri)
}
