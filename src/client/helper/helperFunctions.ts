import { Dispatch, SetStateAction } from 'react'
import { Ingredient, Recipe, User } from '../../shared/types'
import axios from 'axios'
import { FrontEndUser } from '../components/Forms/SignUp'

type PostRecipe = {
  title: string
  ingredients: Ingredient[]
  description: string
  isPublic: boolean
  owner: string
  cookingTime?: string
  tags?: string[]
  rating?: number[]
}

export async function getUser(jwt: string) {
  const config = {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  }

  await axios.get('http://localhost:8080/api/me/', config).catch(console.error)
}

export async function createUser(data: FrontEndUser) {
  if (!data) {
    return console.error('No data')
  }

  await axios
    .post('http://localhost:8080/signup', {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    })
    .catch(console.error)
}

export async function loginUser(data: Pick<User, 'email' | 'password'>) {
  if (!data) {
    return console.error('No data')
  }

  await axios
    .post('http://localhost:8080/login', {
      email: data.email,
      password: data.password,
    })
    .then((res) => {
      document.cookie = `jwtToken=${res.data.token}`
    })
    .catch(console.error)
}

export async function postDataToDB(data: PostRecipe) {
  if (!data) {
    return console.error('No data')
  }
  await axios
    .post('http://localhost:8080/api/recipes/', {
      title: data.title,
      ingredients: data.ingredients,
      description: data.description,
      isPublic: data.isPublic,
      owner: data.owner,
      cookingTime: data.cookingTime,
      tags: data.tags,
      rating: data.rating,
    })
    .catch(console.error)
}

export async function updateData(data: PostRecipe, id: string) {
  if (!data) {
    return console.error('No data')
  }

  await axios.put(`http:/localhost:8080/api/recipes/${id}`).catch(console.error)
}

export async function getDataFromDBAndSetToState<Type>(
  setFetchToState: Dispatch<SetStateAction<Recipe[] | undefined>>
) {
  await axios
    .get('http://localhost:8080/api/recipes/')
    .then((res) => setFetchToState(res.data.recipes))
    .catch(console.error)
}

export async function deleteDataFromDB(id: string) {
  await axios
    .delete(`http://localhost:8080/api/recipes/${id}`)
    .catch(console.error)
}
