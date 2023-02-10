import React from 'react'

type Ingredient = {
  unit: string
  ingredient: string
}

type ListProps = {
  listItems: Ingredient[]
}

const RecipeList = ({ listItems }: ListProps) => {
  return (
    <ul className="recipe-list">
      {listItems.map((item) => (
        <li className="recipe-list__item">
          <span className="recipe-list__item__unit">{item.unit}</span>
          <span className="recipe-list__item__ingredient">
            {item.ingredient}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default RecipeList
