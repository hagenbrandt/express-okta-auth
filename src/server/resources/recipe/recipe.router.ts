import { Router } from "express";
import { getRecipes, addRecipe, updateRecipe, deleteRecipe } from "./recipe.controller";

const router: Router = Router()

router
    .route('/')
    .get(getRecipes)
    .post(addRecipe)

router
    .route('/:id')
    .put(updateRecipe)
    .delete(deleteRecipe)

export default router