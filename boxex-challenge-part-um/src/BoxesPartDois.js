import React from "react"
import boxes from "./componente/boxes"
import Box from "./componente/Box"

export default function BoxesPartDois() {
    const [squares, setSquares] = React.useState(boxes)
    
    const squareElements = squares.map(square => (
        <Box key={square.id} on={square.on} />
    ))
   
    
    return (
        <main>
            {squareElements}
        </main>
    )
}

