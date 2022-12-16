import React from 'react'
import { useForm } from 'react-hook-form'
import { loginUser } from '../../helper/helperFunctions'
import { User } from '../../../shared/types'

export type LoginProps = Pick<User, 'email' | 'password'>

export const LogIn = () => {
  const { register, handleSubmit } = useForm<LoginProps>()
  const onSubmit = (data: LoginProps) => {
    return loginUser(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="userName">User Name</label>
      <input type="text" id="userName" {...register('email')} />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" {...register('password')} />
      <button>Submit</button>
    </form>
  )
}
