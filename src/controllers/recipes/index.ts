import { Response, Request } from "express";
import { Recipe } from "../../types/recipe";
import recipe from "../../models.ts/recipe";

const getRecipes = async(req: Request, res: Response): Promise<void> => {
    try {
        const recipes: Recipe[] = await recipe.find()
        res.status(200).json({ recipes })
    } catch (error) {
        throw error
    }
}

const addRecipe = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick<Recipe, "title" | "ingredients" | "description">

        const newRecipe: Recipe = new recipe({
            title: 'new title',
            ingredients: {oneCup: 'something'},
            description: ['description text']
        })

        const recipeToSave: Recipe = await newRecipe.save()
        const allRecipes: Recipe[] = await recipe.find()

        res.status(201).json({ message: 'Recipe added', recipe: newRecipe, recipes: allRecipes })
    } catch (error) {
        throw error
    }
}

export {getRecipes, addRecipe}