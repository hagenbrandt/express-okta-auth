import { Document } from 'mongoose'

export type Ingredient = {
  name: string
  quantity: number
  unit: string
  alternative?: string[]
}

export type Recipe = Document & {
  title: string
  ingredients: Ingredient[]
  description: string
  isPublic: boolean
  owner: number
  cookingTime?: string
  tags?: string[]
  rating?: number[]
}

export type User = Document & {
  userName: string
  email: string
  password: string
  checkPassword: (password: string) => Promise<boolean>
  createdRecipes: number[]
  bookMarked?: number[]
  rated?: number[]
}
