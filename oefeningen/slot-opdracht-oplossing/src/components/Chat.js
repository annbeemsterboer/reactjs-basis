import { useState } from "react"

export default function Chat({ myId, contact, messages, onSend }) {
  const [text, setText] = useState('')

  const onSendHandler = () => {
    if (onSend) {
      onSend(text)
      setText('')
    }
  }

  return (
    <section className="chat">
      <div className="messages">
        {
          messages.map(m =>
            <div className="message" key={m.id}>
              {m.from === myId ? 'Ik' : contact.name}: {m.text}
            </div>)
        }
      </div>
      <div className="send-message">
        <input value={text}
          placeholder={'Chat met ' + contact.name}
          onChange={e => setText(e.target.value)} />
        <button onClick={onSendHandler}>&rarr;</button>
      </div>
    </section>
  )
}