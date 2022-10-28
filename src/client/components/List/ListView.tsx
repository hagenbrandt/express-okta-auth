import React, { useEffect, useState } from 'react'
import { Recipe } from '../../../server/types/recipe'
import { deleteDataFromDB } from '../../helper/helperFunctions';
import { Form } from '../Form';

type ListViewType = {recipes: Recipe[]}

export const ListView = (props: ListViewType) => {
    const [idForRecipeToUpdate, setIdForRecipeToUpdate] = useState<string>('')
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

    useEffect(() => {
        if (idForRecipeToUpdate) {
            return setIsModalVisible(true)
        }

        return setIsModalVisible(false)
    }, [idForRecipeToUpdate, setIdForRecipeToUpdate])
    
    return (
        <ul>
            <Modal />
            {props.recipes.map((item) => {
                return <li>
                    {item.title}<br />
                    {getIngredients(item.ingredients)}<br />
                    {item.description[0]}
                    <button type='button' value={item._id} onClick={((event) => setIdForRecipeToUpdate(event.currentTarget.value))}>Edit</button>
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

    function Modal () {
        if (isModalVisible) {
            const currentRecipe = props.recipes.find((item) => item._id === idForRecipeToUpdate)
            return (
                <dialog style={{display: 'block', position: 'absolute', width: '60vw', height: '40vh', background: 'cornflowerblue'}}>
                    <button type='button' onClick={() => setIdForRecipeToUpdate('')}>X</button>
                    <Form recipe={currentRecipe} />
                </dialog>
            )
        }

        return <></>
    }
}