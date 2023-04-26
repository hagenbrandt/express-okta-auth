import React, { useEffect, useState } from 'react'
import { Ingredient, Recipe } from '../../../shared/types'
import { deleteDataFromDB } from '../../helper/helperFunctions'
import Form from '../Form'

export const ListView = ({ recipes }: { recipes: Recipe[] }) => {
  const [idForRecipeToUpdate, setIdForRecipeToUpdate] = useState<string>('')
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

  useEffect(() => {
    if (idForRecipeToUpdate) {
      return setIsModalVisible(true)
    }

    return setIsModalVisible(false)
  }, [idForRecipeToUpdate, setIdForRecipeToUpdate])
  console.log(recipes)

  return (
    <ul>
      <li>Hagen</li>
      <Modal />
      {recipes.map((item) => {
        return (
          <li>
            {item.title}
            <br />
            {getIngredients(item.ingredients)}
            <br />
            {item.description}
            <button
              type="button"
              value={item._id}
              onClick={(event) =>
                setIdForRecipeToUpdate(event.currentTarget.value)
              }
            >
              Edit
            </button>
            <button type="button" value={item._id} onClick={handleClick}>
              Delete
            </button>
          </li>
        )
      })}
    </ul>
  )

  function getIngredients(ingredients: Ingredient[]) {
    console.log('Ingredients: ', ingredients)

    return ingredients.map((item) => (
      <span>
        {item.name}
        <br />
        {item.quantity}: {item.unit}
        <br />
        {item.alternative ? (
          <div>
            <p>Alternatives: </p>`${item.alternative}`
          </div>
        ) : (
          <></>
        )}
      </span>
    ))
  }

  async function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    if (event.currentTarget.value) {
      await deleteDataFromDB(event.currentTarget.value).catch(console.error)
    }
  }

  function Modal() {
    if (isModalVisible) {
      const currentRecipe = recipes.find(
        (item) => item._id === idForRecipeToUpdate
      )
      return (
        <dialog
          style={{
            display: 'block',
            position: 'absolute',
            width: '60vw',
            height: '40vh',
            background: 'cornflowerblue',
          }}
        >
          <button type="button" onClick={() => setIdForRecipeToUpdate('')}>
            X
          </button>
          <Form recipe={currentRecipe} />
        </dialog>
      )
    }

    return <></>
  }
}
