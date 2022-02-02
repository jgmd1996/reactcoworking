//import React from 'react';

// export default function Box(props) {
//   const styles = {
//       backgroundColor: props.on ? "#222222" : "#cccccc"
//   }

//   return (
//     <div style={styles} className="box"></div>
//   )
// }


// a parti daqui e a aula de boxes challeng parte .1 local state

// export default function Box(props) {
//   const [on, setOn] = React.useState(props.on)

//   const styles = {
//     backgroundColor: on ? "#222222" : "#cccccc"
//   }

//   function toggle(){
//     setOn(prevOn => !prevOn)
//   }

//   return (
//     <div style={styles} className="box" onClick={toggle}></div>
//   )
// }

//a parti daqui a aula e de 3.2

import React from "react"

export default function Box(props) {

  const styles = {
    backgroundColor: props.on ? "#222222" : "#cccccc"
  }

  return (
    <div 
    style={styles} 
    className="box" 
    onClick={()=>props.toggle(props.id)}>
    </div>
  )
}

