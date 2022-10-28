import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { postDataToDB } from '../helper/helperFunctions'

type RecipeForm = {
  title: string
  ingredients: string
  description: string
}

export const Form = () => {
  const { control, register, handleSubmit } = useForm<RecipeForm>()
  const onSubmit = (data: RecipeForm) => {
    postDataToDB({
      title: data.title,
      ingredients: { ingredients: [data.ingredients] },
      description: [data.description],
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" {...register('title')} />
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
              {...field}
            ></textarea>
          </label>
        )}
      />
      <button type="submit">Submit</button>
    </form>
  )
}
