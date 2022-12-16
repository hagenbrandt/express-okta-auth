import { Request } from 'express'
import { User } from '../../shared/types'

export type LoginRequest = Request & { body: Pick<User, 'email' | 'password'> }