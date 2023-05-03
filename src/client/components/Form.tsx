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

const Form = (props: RecipeProps) => {
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
        isPublic: true,
        owner: 'ObjectId("63939daf8896c19da6430e19")',
      }

      return updateData(updatedRecipe, props.recipe?._id)
    }

    return postDataToDB({
      title: data.title,
      ingredients: data.ingredients,
      description: data.description,
      isPublic: true,
      owner: 'ObjectId("63939daf8896c19da6430e19")',
    })
  }

  return (
    <section className="recipe-form">
      <h1 className="recipe-form__headline">Create recipe</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="title" className="recipe-form__label">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="recipe-form__input"
          placeholder={props.recipe && props.recipe.title}
          {...register('title')}
        />
        <h2 className="recipe-form__headline recipe-form__headline--secondary">
          Ingredients
        </h2>
        {fields.map((field, index) => {
          return (
            <section
              className="recipe-form__ingredients-wrapper"
              key={field.id}
            >
              <label htmlFor="ingredient-name" className="recipe-form__label">
                Ingredient
                <input
                  id="ingredient-name"
                  className="recipe-form__input"
                  type="text"
                  {...register(`ingredients.${index}.name`)}
                />
              </label>
              <label
                htmlFor="ingredient-quantity"
                className="recipe-form__label"
              >
                Quantity
                <input
                  id="ingredient-quantity"
                  className="recipe-form__input"
                  type="number"
                  {...register(`ingredients.${index}.quantity`)}
                />
              </label>
              <label htmlFor="ingredient-unit" className="recipe-form__label">
                Unit
                <input
                  id="ingredient-unit"
                  className="recipe-form__input"
                  type="text"
                  {...register(`ingredients.${index}.unit`)}
                />
              </label>
              <label
                htmlFor="ingredient-alternative"
                className="recipe-form__label"
              >
                Alternative
                <input
                  id="ingredient-alternative"
                  className="recipe-form__input"
                  type="text"
                  {...register(`ingredients.${index}.alternative`)}
                />
              </label>
              <div className="recipe-form__button-wrapper">
                <button
                  className="recipe-form__button"
                  type="button"
                  onClick={() => {
                    remove(index)
                  }}
                >
                  Remove Ingredient
                </button>
              </div>
            </section>
          )
        })}
        <div className="recipe-form__button-wrapper">
          <button
            className="recipe-form__button"
            type="button"
            onClick={() => {
              append(defaultIngredient)
            }}
          >
            Append
          </button>
          <button
            className="recipe-form__button"
            type="button"
            onClick={() => {
              prepend(defaultIngredient)
            }}
          >
            Prepend
          </button>
        </div>
        <Controller
          name="description"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <label htmlFor="description" className="recipe-form__label">
              Description
              <textarea
                id="description"
                className="recipe-form__input recipe-form__input--textarea"
                cols={30}
                rows={10}
                placeholder={props.recipe?.description[0]}
                {...field}
              ></textarea>
            </label>
          )}
        />
        <div className="recipe-form__button-wrapper">
          <button type="submit" className="recipe-form__button">
            Submit
          </button>
        </div>
      </form>
    </section>
  )
}

export const defaultIngredient: Ingredient = {
  name: '',
  quantity: 0,
  unit: '',
  alternative: [''],
}

export default Form
