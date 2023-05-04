import React from 'react'
import { Recipe } from '../../shared/types'
import RecipeCard from './RecipeCard'

const RecipeList = ({ recipes }: { recipes: Recipe[] }) => {
  if (!recipes) {
    return <h1>No recipes!</h1>
  }

  return (
    <ul className="recipe-list">
      {recipes.map((item) => (
        <RecipeCard
          title={item.title}
          ingredients={item.ingredients}
          buttonText={'Show more'}
        />
      ))}
    </ul>
  )
}

export default RecipeList
