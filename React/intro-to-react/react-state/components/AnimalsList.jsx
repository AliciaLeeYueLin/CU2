//Arrow function syntax
//Normal function
// function AnimalList() {

import { useState } from "react";

// }
//Arrow Function
const AnimalsList = () => {
    // useState Variables here
    const [animals, setAnimals] = useState([]);
    const [animalEntry, setAnimalEntry] = useState(""); // This is a function to add animals into list

    const addAnimal = () => {
        console.log(animalEntry);
        setAnimals([...animals, animalEntry]);
        setAnimalEntry("");
    };

    return (
        <>
            <ul>
                {animals.map((animal, key) => (
                    <li key={key}>{animal}</li>
                ))}
            </ul>
            <input type="text" value={animalEntry} onChange={(event) => setAnimalEntry(event.target.value)} />

            <button onClick={addAnimal}>Add Animal</button>
        </>
    );
};

export default AnimalsList;
