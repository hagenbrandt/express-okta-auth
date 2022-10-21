import React from 'react'
import { Recipe } from '../../../server/types/recipe'

type ListViewType = {recipes: Recipe[]}

export const ListView = (props: ListViewType) => {
    console.log('Items', props.recipes);
    
    return (
        <ul>
            {props.recipes.map((item) => {
                return <li>
                    {item.title}<br />
                    {getIngredients(item.ingredients)}<br />
                    {item.description[0]}
                    </li>
            })}
        </ul>
    )

    function getIngredients(ingredients: object) {
        return Object.entries(ingredients).map(([key, value]) => {
            return <span>{key}: {value}</span>
        })
    }
}