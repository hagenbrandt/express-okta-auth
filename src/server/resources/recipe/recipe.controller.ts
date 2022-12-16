import { Response, Request } from "express";
import { Recipe } from "../../../shared/types";
import responseStatus from "../../utils/responseStatus";
import RecipeModel from './recipe.model'

const getRecipes = async(req: Request, res: Response): Promise<void> => {
    try {
        const recipes: Recipe[] = await RecipeModel.find()
        res.status(responseStatus.ok).json({ recipes })
    } catch (error) {
        throw error
    }
}

const addRecipe = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick<Recipe, "title" | "ingredients" | "description">

        const newRecipe: Recipe = new RecipeModel({
            title: body.title,
            ingredients: body.ingredients,
            description: body.description
        })

        const recipeToSave: Recipe = await newRecipe.save()
        const allRecipes: Recipe[] = await RecipeModel.find()

        res.status(responseStatus.created).json({ message: 'Recipe added', recipe: recipeToSave, recipes: allRecipes })
    } catch (error) {
        throw error
    }
}

const updateRecipe = async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            params: { id },
            body,
        } = req

        const updatedRecipe: Recipe | null = await RecipeModel.findByIdAndUpdate(
            { _id: id },
            body
        )

        const allRecipes: Recipe[] = await RecipeModel.find()

        res.status(responseStatus.ok).json({
            message: 'Recipe updated',
            recipe: updatedRecipe,
            recipes: allRecipes
        })
    } catch (error) {
        throw error
    }
}

const deleteRecipe = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedRecipe: Recipe | null = await RecipeModel.findByIdAndRemove(
            req.params.id
        )

        const allRecipes: Recipe[] = await RecipeModel.find()

        res.status(responseStatus.ok).json({
            message: 'Recipe deleted',
            recipe: deletedRecipe,
            recipes: allRecipes
        })
    } catch (error) {
        throw error
    }
}

export {getRecipes, addRecipe, updateRecipe, deleteRecipe}