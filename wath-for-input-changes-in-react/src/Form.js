import React from "react";

export default function Form() {

    const [primeiroNome, segundoNome] = React.useState("")

    console.log(primeiroNome)

    function handleChange(event) {
        segundoNome(event.target.value)
    }

    return (
        <form>
            <input
            type="text"
            placeholder={"primeiro nome"}
            onChange={handleChange}
            />
        </form>
    )
}