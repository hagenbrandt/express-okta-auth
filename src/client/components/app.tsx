import React, { useState } from 'react'
import { Form } from './Form'

export const App = () => {
    const [data, setData] = useState(
        {
            "title": "Very new title",
            "ingredients": {
                "oneCup": "something"
            },
            "description": ["a description text"]
        }
    )

return (
    <>
        <h1>Hello Frontend</h1>
        <Form />
        {/* <button onClick={postDataToDB}>Set data to database</button> */}
    </>
)
}
