import { Router } from "express";
import { createUser } from "./user.controller";

const router: Router = Router()

router
    .route('/signup')
    .post(createUser)

export default router