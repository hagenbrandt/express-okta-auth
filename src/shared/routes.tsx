import React from 'react'
import { Form } from '../client/components/Form'
import { List } from '../client/components/List/List'
import { LogIn } from '../client/components/Forms/LogIn'
import { SignUp } from '../client/components/Forms/SignUp'

export type Route = {
  component: JSX.Element
  isIndex: boolean
  path: string
}

const routes: Route[] = [
  {
    component: <List />,
    isIndex: true,
    path: '/',
  },
  {
    component: <LogIn />,
    isIndex: false,
    path: '/login',
  },
  {
    component: <Form />,
    isIndex: false,
    path: '/edit',
  },
  {
    // component: <p>Under Constructions</p>,
    component: <SignUp />,
    isIndex: false,
    path: '/signup',
  },
]

export default routes
