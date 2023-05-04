import { ObjectId } from 'mongodb'
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
      type: Array,
      required: true,
    },
    description: { type: String, required: true },
    isPublic: {
      type: Boolean,
      required: true,
    },
    owner: {
      type: ObjectId,
      required: true,
    },
    cookingTime: {
      type: String,
      required: false,
    },
    tags: {
      type: Array,
      required: false,
    },
    rating: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
)

export default model<Recipe>('recipe', recipeSchema)
