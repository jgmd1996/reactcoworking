import React from "react";

export default function FormAula41() {
    const [primeiroNome, setPrimeiroNome] = React.useState("")
    const [segundoNome, setSegundoNome] = React.useState("")

    console.log(primeiroNome, segundoNome)

    function handlePrimeiroNome(event){
        setSegundoNome(event.target.value)
    }

    function handleSegundoNome(event){
        setPrimeiroNome(event.target.value)
    }

    return (
        <form>
            <input
            type="text"
            placeholder={"primeiro nome"}
            onChange={handlePrimeiroNome}
            />
            <br/>
            <input
            type="text"
            placeholder={"Segundo nome"}
            onChange={handleSegundoNome}
            />
        </form>
    )
}