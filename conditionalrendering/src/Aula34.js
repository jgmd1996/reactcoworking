import React from "react";
import Joke from "./component/Joke";
import jokesData from "./component/jokesData";

export default function Aula34 (){
    const jokeElements = jokesData.map(joke => {
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