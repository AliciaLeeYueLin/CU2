//Today you guys will learn about React State
//It is a type of React Hook
//To use it, you need to import useState from react
import { useState } from "react";

function AnimeList() {
    //This is how you can create your useState variable
    const [AnimeList, setAnimeList] = useState(["One Piece", "Naruto", "Bleach", "Pokemon"]);
    //Notice how you have two items inside your declaration above
    //On the left, you have your useState variable
    //On the right, you habe a useState funciton to UPDATE the useState variable

const [animeInput,setAnimeInput] = useState('')

    //Instead fo doing this
    //AnimeList.push("Jujutsu Kaisen")

    //We use the useState funciton to update the animeList
    // setAnimeList([...AnimeList, "Jujutsu Kaisen"])

    // console.log(AnimeList);

    function addJujutsuKaisen(){
        setAnimeList([...AnimeList, "Jujutsu Kaisen"])
    }

    function submitNewAnime(){
        console.log(animeInput)
        setAnimeList([...AnimeList,animeInput])
        setAnimeInput("")
    }

    return (
        <>
            {/*How you would normally display your data, hard-coded */}
            <ul className = 'list-group'>
                {/* <li>One Piece</li>
            <li>Naruto</li>
            <li>Bleach</li>
            <li>Pokemon</li> */}
                {/* Using.map()to display the useState variable */}
                {AnimeList.map((anime, key) => (
                    <li className= 'list-group-item'key={key}>{anime}</li>
                ))}
            </ul>
            {/* Now we add a form imput to allow user to type their own anime */}
            <input  type="text"  value={animeInput} className='form-control w-50 my-4 mx-auto' placeholder="Enter your Anime" onChange={(e) => setAnimeInput(e.target.value)}
            onKeyDown={(event) => {
                if(event.key === "Enter"){
                    event.preventDefault();
                    submitNewAnime()
                }
            }}
            />
            
            {/* We use the setter function from useState to update */}
            {/* The AnimeList variable */}
            <button className='btn btn-primary d-block mx-auto my-3' onClick={submitNewAnime}>Submit New Anime</button>

            {/* Try creating another button that "pushes" a new element instead */}
            {/* <button className='btn btn-primary d-block mx-auto my-3' onClick={() => AnimeList.push("Jujutsu Kaisen")}>Add Jujutsu Kaisen with Push</button> */}
        </>
    );
}

export default AnimeList;
