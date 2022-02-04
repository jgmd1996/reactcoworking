import React from "react";
import Joke from "./component/Joke";
import jokeData from "./component/jokeData";

export default function Aula36 (){
    const jokeElements = jokeData.map(joke => {
        return (
            <Joke 
            key={joke.id}
            setup={joke.setup}
            punchline={joke.punchline}
            />
        )
    })

    return (
        <div>
            {jokeElements}
        </div>
    )
}