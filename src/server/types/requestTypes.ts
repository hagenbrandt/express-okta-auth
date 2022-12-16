import { Request } from 'express'
import { LeanDocument } from 'mongoose'
import { User } from '../../shared/types'

export type LoginRequest = Request & { body: Pick<User, 'email' | 'password'> }

export type AuthRequest = Request & { user?: LeanDocument<User> | null }