import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema(
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

export const Item = mongoose.model('item', itemSchema)
