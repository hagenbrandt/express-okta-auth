import { Dispatch, SetStateAction } from 'react'
import { Recipe } from '../../server/types/recipe'
import { User } from '../../shared/types'

type PostRecipe = {
  title: string
  ingredients: object
  description: string[]
}

export async function createUser(data: User) {
  if (!data) {
    console.error('No data');
    
    return
  }
  console.log('Try to fetch');
  
  await fetch('http://localhost:8080/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then((res) => res.json())
    .then((data) => {
      console.log('Created User from frontend', data);
  })
    .catch(console.error)
}

export async function postDataToDB(data: PostRecipe) {
  if (!data) {
    console.log('No data')
    return
  }
  await fetch('http://localhost:8080/api/recipes/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log('Success:', data)
    })
    .catch(console.error)
}

export async function updateData(data: PostRecipe, id: string) {
  if (!data) {
    console.log('No data')
    return
  }
  await fetch(`http://localhost:8080/api/recipes/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log('Update:', data)
    })
    .catch(console.error)
}

export async function getDataFromDBAndSetToState<Type>(
  setFetchToState: Dispatch<SetStateAction<Recipe[] | undefined>>
) {
  await fetch('http://localhost:8080/api/recipes/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      setFetchToState(data.recipes)
    })
    .catch(console.error)
}

export async function deleteDataFromDB(id: string) {
  await fetch(`http://localhost:8080/api/recipes/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log('Delete: ', data)
    })
    .catch(console.error)
}
