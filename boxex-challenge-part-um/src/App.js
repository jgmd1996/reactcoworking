import React from 'react';
import boxes from './componente/boxes';

function App() {
  const [squares, setSquares] = React.useState(boxes)

  const squaresElements = squares.map(square => (
    <div className='box' key={square.id}></div>
  ))
  return (
    <main>
      {squaresElements}
    </main>
  );
}

export default App;
