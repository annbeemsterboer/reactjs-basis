import React, { useState } from "react"

import Chat from "./components/Chat"
import ContactList from "./components/ContactList"

import "./App.css"

/* slotopdracht: Bouw het begin van een chat applicatie*/

function App() {
  const myId = 0
  const [contact, setConctact] = useState(contacts[0])
  const [chatMessages, setChatMessages] = useState(messages)

  const fitleredMessages = chatMessages
    .filter(m => m.to === contact.id || m.from === contact.id)
    .sort((m1, m2) => m1.id - m2.id)

  const onSend = (text) => {
    const newId = 1 + Math.max(...chatMessages.map(o => o.id))
    setChatMessages([
      ...chatMessages,
      {
        id: newId,
        to: contact.id,
        from: myId,
        text
      }
    ])
  }

  return (
    <div className="container">
      <ContactList
        contacts={contacts}
        selectedContact={contact}
        onSelect={contact => setConctact(contact)}
      />
      <Chat key={contact.id} myId={myId} contact={contact} messages={fitleredMessages} onSend={onSend} />
    </div>
  )
}

export default App

const contacts = [
  { id: 1, name: 'Ernst' },
  { id: 2, name: 'Rebecca' },
  { id: 3, name: 'Jaap' }
]

const messages = [
  { id: 0, from: 0, to: 1, text: 'Hallo, hoe gaat het ermee?' },
  { id: 1, from: 1, to: 0, text: 'Gaat goed hier!' }
]