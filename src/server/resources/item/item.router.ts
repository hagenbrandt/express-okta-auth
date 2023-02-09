import { Request, Response, Router } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const messageContent = process.env.MONGODB_URL
const controller = (req: Request, res: Response) => {
  res.send({ message: messageContent })
}

const router = Router()

router
  .route('/')
  .get((req, res) => {
    res.status(400).json({ message: 'hello' })
  })
  .post(controller)

router.route('/:id').put(controller).delete(controller).get(controller)

export default router
