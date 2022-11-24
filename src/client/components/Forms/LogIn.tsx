import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import OktaAuth from '@okta/okta-auth-js';
import { withAuth } from '@okta/okta-react';

export type LoginProps = {
    username: string;
    password: string;
}

export const LogIn = () => {
    const [sessionToken, setSessionToken] = useState(null)
    const [error, setError] = useState(null)
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const { register, handleSubmit } = useForm<LoginProps>()
    const onSubmit = (data: LoginProps) => {
        console.log(data);
    }

    // const oktaAuth = new OktaAuth({ url:  })

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="userName">
                User Name
            </label>
            <input type="text" id="userName" {...register('username')} />
            <label htmlFor="password">
                Password
            </label>
            <input type="password" id="password" {...register('password')} />
            <button>Submit</button>
        </form>
    )
}

// export default withAuth(
    
// )