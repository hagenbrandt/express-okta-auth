import { Router } from 'express'
import {me }from './user.controller'

const router = Router()

router.route('/').get(me)

export default router
