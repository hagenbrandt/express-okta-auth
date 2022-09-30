import mongoose from 'mongoose'

// export const connect = (url, options) => {
//     return mongoose.connect(
//         url, 
//         { ...options,useNewUrlParser: true }
//     )
// }
export const connect = () => {
    return mongoose.connect(process.env.DATABASE_URL)
}