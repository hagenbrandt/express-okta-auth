import React, { useEffect, useState } from 'react'
import { getDataFromDBAndSetToState } from '../../helper/helperFunctions'
import { ListView } from './ListView'
import { useDocumentStore } from '../../store/documentStore'
import { Recipe } from '../../../shared/types'
import RecipeList from '../RecipeList'

export const List = () => {
  const isClient = useDocumentStore((state) => state.isClient)
  const [recipes, setRecipes] = useState<Recipe[]>()

  useEffect(() => {
    getDataFromDBAndSetToState<Recipe>(setRecipes)
  }, [])

  if (!recipes || !isClient) {
    return <></>
  }

  return <RecipeList recipes={recipes} />
}
