import React from 'react';
import boxes from './componente/boxes';

export default function DybamicStyle(props) {
  const [squares, setSquares] = React.useState(boxes)


  const styles = {
      backgroundColor: props.darkMode ? "#222222" : "#cccccc"
  }

  const squaresElements = squares.map(square => (
    <div style={styles} className='box' key={square.id}></div>
  ))
  return (
    <main>
      {squaresElements}
    </main>
  );
}


