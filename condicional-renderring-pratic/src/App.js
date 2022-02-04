import React from "react";

export default function App() {
  const [messages, setMessages] = React.useState(["ola", "mundo"])//([])


  return(
    <div>
      {
        messages.length > 0 && 
        <h1>you have {messages.length} unread messagens</h1>
      }
    </div>
  )
}

