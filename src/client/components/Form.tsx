import React from 'react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { Recipe, Ingredient } from '../../shared/types'
import { postDataToDB, updateData } from '../helper/helperFunctions'

type RecipeForm = Pick<
  Recipe,
  | 'title'
  | 'ingredients'
  | 'description'
  | 'isPublic'
  | 'owner'
  | 'cookingTime'
  | 'tags'
  | 'rating'
>

type RecipeProps = {
  recipe?: Recipe
}

export const Form = (props: RecipeProps) => {
  const { control, register, handleSubmit } = useForm<RecipeForm>({
    defaultValues: {
      ingredients: [defaultIngredient],
    },
  })
  const { fields, append, prepend, remove } = useFieldArray({
    name: 'ingredients',
    control,
  })
  const onSubmit = (data: RecipeForm) => {
    if (props) {
      const updatedRecipe = {
        title: data.title,
        ingredients: data.ingredients,
        description: data.description,
      }

      return updateData(updatedRecipe, props.recipe?._id)
    }

    return postDataToDB({
      title: data.title,
      ingredients: data.ingredients,
      description: data.description,
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
      <h3>Ingredients</h3>
      {fields.map((field, index) => {
        return (
          <section key={field.id}>
            <input type="text" {...register(`ingredients.${index}.name`)} />
            <input
              type="number"
              {...register(`ingredients.${index}.quantity`)}
            />
            <input type="text" {...register(`ingredients.${index}.unit`)} />
            <input
              type="text"
              {...register(`ingredients.${index}.alternative`)}
            />
            <button
              type="button"
              onClick={() => {
                remove(index)
              }}
            >
              Delete
            </button>
          </section>
        )
      })}
      <button
        type="button"
        onClick={() => {
          append(defaultIngredient)
        }}
      >
        Append
      </button>
      <button
        type="button"
        onClick={() => {
          prepend(defaultIngredient)
        }}
      >
        Prepend
      </button>
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

export const defaultIngredient: Ingredient = {
  name: '',
  quantity: 0,
  unit: '',
  alternative: [''],
}
