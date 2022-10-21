import React, { useEffect, useState } from 'react'
import { getDataFromDBAndSetToState } from '../../helper/helperFunctions'
import { Recipe } from '../../../server/types/recipe'
import { ListView } from './ListView'

export const List = () => {
    const [recipes, setRecipes] = useState<Recipe[]>()
    
    useEffect(() => {
        getDataFromDBAndSetToState<Recipe>(setRecipes)
    },[])

    if (!recipes) {
        return <></>
    }

    return <ListView recipes={recipes} />
}