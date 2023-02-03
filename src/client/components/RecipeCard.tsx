import React from 'react'

type RecipeCardProps = {
  headlineText: string
  ingredients: string[]
  buttonText: string
}

const RecipeCard = ({
  headlineText,
  ingredients,
  buttonText,
}: RecipeCardProps) => {
  return (
    <li>
      <h3>{headlineText}</h3>
      <ul>
        {ingredients.map((item, index) => (
          <li key={`${item}-${index}`}>{item}</li>
        ))}
      </ul>
      <button type="button">{buttonText}</button>
    </li>
  )
}

export default RecipeCard
