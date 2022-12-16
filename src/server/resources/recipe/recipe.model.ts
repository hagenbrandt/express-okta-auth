import { model, Schema } from 'mongoose'
import { Recipe } from '../../../shared/types'

const recipeSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxLength: 30,
    },
    ingredients: {
      type: Object,
      required: true,
    },
    description: Array,
  },
  { timestamps: true }
)

export default model<Recipe>('recipe', recipeSchema)
