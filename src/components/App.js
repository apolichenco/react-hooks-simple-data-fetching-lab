import React, { useState, useEffect } from "react";

function App() {
    const [image, setImage] = useState()

    useEffect (() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(r => r.json())
        .then((data) => {
            console.log(data)
            setImage(data.message)
        })
    }, []);

    if (!image) return <p>Loading...</p>

    return(
        <img src={image} alt="A Random Dog"></img>
    )
}

export default App;