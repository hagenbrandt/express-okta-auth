import { Item } from './item.modal'
import mongoose from 'mongoose'

const run = async () => {
  const item = await Item.create({
    name: 'Test-Name',
  })

  console.log(item)
}

run()
