import { Document } from 'mongoose'

export type User = Document & {
  firstName: string
  lastName: string
  email: string
  password: string
  id: string
  checkPassword: (password: string) => Promise<boolean>
}
