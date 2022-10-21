type PostRecipe = {
    title: string
    ingredients: object
    description: string[]
}

export async function postDataToDB(data: PostRecipe) {
    if (!data) {
        console.log('No data');
        return
    }
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