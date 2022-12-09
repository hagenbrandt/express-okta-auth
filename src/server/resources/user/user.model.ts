import { model, Schema } from 'mongoose'
import { User } from '../../../shared/types'
import bcrypt from 'bcrypt'

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
        },
        id: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
)

userSchema.pre('save', function(next) {
    if (!this.isModified('password')) {
        return next()
    }

    bcrypt.hash(this.password, 8, (err, hash) => {
        if (err) {
            return next(err)
        }

        this.password = hash
        next()
    })
})

userSchema.methods.checkPassword = function(password: string): Promise<boolean> {
    const passwordHash = this.password
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, passwordHash, (err, same) => {
            if (err) {
                return reject(err)
            }

            resolve(same)
        })
    })
}

export default model<User>('user', userSchema)