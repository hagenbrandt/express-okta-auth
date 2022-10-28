import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Recipe } from '../../server/types/recipe'
import { postDataToDB, updateData } from '../helper/helperFunctions'

type RecipeForm = {
  title: string
  ingredients: string
  description: string
}

type RecipeProps = {
  recipe?: Recipe
}

export const Form = (props: RecipeProps) => {
  const { control, register, handleSubmit } = useForm<RecipeForm>()
  const onSubmit = (data: RecipeForm) => {
    if (props) {
      const updatedRecipe = {
        title: data.title,
        ingredients: { ingredients: [data.ingredients] },
        description: [data.description],
      }

      return updateData(updatedRecipe, props.recipe?._id)
    }

    return postDataToDB({
      title: data.title,
      ingredients: { ingredients: [data.ingredients] },
      description: [data.description],
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        placeholder={props.recipe && props.recipe.title}
        {...register('title')}
      />
      <label htmlFor="ingredients">Ingredients</label>
      <input type="text" id="ingredients" {...register('ingredients')} />
      <Controller
        name="description"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <label htmlFor="description">
            Description
            <textarea
              id="description"
              cols={30}
              rows={10}
              placeholder={props.recipe?.description[0]}
              {...field}
            ></textarea>
          </label>
        )}
      />
      <button type="submit">Submit</button>
    </form>
  )
}
