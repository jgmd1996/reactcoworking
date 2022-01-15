import React from 'react';
//import './App.css';

// function Props1() {
//     const primeiroNome = "João Gabriel";
//     const segundoNome = "Moreira Doudement";

//     return (
//         <h1>Hello {primeiroNome} {segundoNome}!</h1>
//     );
// }

function Props1() {
    const date = new Date();
    const horas = date.getHours()
    let timeOfDay

    if (horas <12) {
        timeOfDay = "morning"
    }else if (horas >= 12 && horas < 17){
        timeOfDay = "afternoon"
    }else {
        timeOfDay= "night"
    }
    

    return (
        <h1>boa {timeOfDay}</h1>
    );
}

export default Props1;