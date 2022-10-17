import React, { useState } from 'react'

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
    <button onClick={postDataToDB}>Set data to database</button>
    </>
)

async function postDataToDB() {
    if (!data) {
        console.log('No data');
        return
    }
    console.log('data', data);
    
    await fetch('http://localhost:8080/api/recipes/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then((res) => res.json()).then((data) => {
        console.log('Success:', data);
    }).catch(console.error)
}
}
