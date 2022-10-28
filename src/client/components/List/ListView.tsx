import React from 'react'
import { Recipe } from '../../../server/types/recipe'
import { deleteDataFromDB } from '../../helper/helperFunctions';

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
                    <button type='button' value={item._id} onClick={handleClick}>Delete</button>
                    </li>
            })}
        </ul>
    )

    function getIngredients(ingredients: object) {
        return Object.entries(ingredients).map(([key, value]) => {
            return <span>{key}: {value}</span>
        })
    }

    async function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        if (event.currentTarget.value) {
            await deleteDataFromDB(event.currentTarget.value).catch(console.error)
        }
    }
}