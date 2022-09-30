import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        firstName: String,
        lastName: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
)

export const User = mongoose.model('user', userSchema)