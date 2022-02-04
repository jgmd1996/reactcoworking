import React from 'react';

export default function App() {
  const [messages, setMessagens] = React.useState(["A", "B"])



  return(
    <div>
      {
        messages.length === 0 ?
        <h1>you're all caught up!</h1> :
        <h1>tou rave {messages.length} unread {messages.length > 1 ? "messages" : "messages"}</h1>
      }
    </div>
  )
}