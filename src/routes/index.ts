import { Router } from "express";
import { getRecipes, addRecipe } from "../controllers/recipes";

const router: Router = Router()

router.get('/recipes', getRecipes)

router.post('/add-recipe', addRecipe)

export default router