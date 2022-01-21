import React from 'react';

export function Aula5Onclik() {

    function handleClick(){
        console.log("o click deu certo!!")
    }

    function passandoMausePorcima(){
        console.log("o mause foi passado por cima da imagem")
    }


  return (
    <div className="container">
        <img 
        src="http://picsum.photos/640/360"
        onMouseOver={passandoMausePorcima}
        />
        
        <br />
        
        <button onClick={handleClick}>Click me</button>
    </div>
    
  );
}

export default Aula5Onclik;
