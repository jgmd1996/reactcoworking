import React from "react";

export default function Joke(props) {
    return (
        <div>
            {props.setup && <h3>Setub: {props.setup}</h3>}
            <p>Punchline: {props.punchiline}</p>
            <hr />
        </div>
    )
}