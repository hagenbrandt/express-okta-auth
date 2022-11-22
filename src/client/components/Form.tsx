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
      <label
        htmlFor="title"
        className="block text-sm font-medium text-gray-700"
      >
        Title
      </label>
      <input
        type="text"
        id="title"
        className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        placeholder={props.recipe && props.recipe.title}
        {...register('title')}
      />
      <label
        htmlFor="ingredients"
        className="block text-sm font-medium text-gray-700"
      >
        Ingredients
      </label>
      <input
        type="text"
        id="ingredients"
        className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        {...register('ingredients')}
      />
      <Controller
        name="description"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
            <textarea
              id="description"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
