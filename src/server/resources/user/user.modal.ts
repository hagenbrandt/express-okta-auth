import { model, Schema } from 'mongoose'
import { User } from '../../../shared/types'

const userSchema: Schema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
            maxLength: 20
        },
        lastName: {
            type: String,
            required: true,
            maxLength: 30
        },
        email: {
            type: String,
            required: true,
            maxLength: 50
        },
        password: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
)

export default model<User>('user', userSchema)