import { Router } from 'express'
import { signin, signup } from './auth.controller'

const router: Router = Router()

router.route('/login').post(signin)

router.route('/signup').post(signup)

export default router
