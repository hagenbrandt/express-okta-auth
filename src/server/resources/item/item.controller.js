import { Item } from './item.modal'
import mongoose from 'mongoose'

const run = async () => {
  const item = await Item.create({
    name: 'Test-Name',
    createdBy: mongoose.Types.ObjectId(),
    list: mongoose.Types.ObjectId(),
  })

  console.log(item)
}

run()
