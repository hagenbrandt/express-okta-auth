import React from "react";
import { useForm } from "react-hook-form";
import { User } from '../../../shared/types'
import { createUser } from "../../helper/helperFunctions";

export const SignUp = () => {
    const { control, register, handleSubmit } = useForm<User>()
    const onSubmit = (data: User) => {
        // console.log('Data: ', data);
        return createUser(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="firstName">
                First Name
            </label>
            <input type="text" id="firstName" {...register('firstName')} />
            <label htmlFor="lastName">
                Last Name
            </label>
            <input type="text" id="lastName" {...register('lastName')} />
            <label htmlFor="email">
                Email
            </label>
            <input type="email" id="email" {...register('email')} />
            <label htmlFor="password">
                Password
            </label>
            <input type="password" id="password" {...register('password')} />
            <label htmlFor="id">
                ID
            </label>
            <input type="text" id="id" {...register('id')} />
            <button>Submit</button>
        </form>
    )
}