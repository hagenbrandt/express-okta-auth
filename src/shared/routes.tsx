import React from 'react'
import { Form } from '../client/components/Form'
import { List } from '../client/components/List/List'

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
    component: <Form />,
    isIndex: false,
    path: '/edit',
  },
  {
    component: <p>Under Constructions</p>,
    isIndex: false,
    path: '/signup',
  },
]

export default routes
