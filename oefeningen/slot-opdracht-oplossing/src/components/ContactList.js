export default function ContactList({
  selectedContact,
  contacts,
  onSelect
}) {
  const activeChatClass = (contactId) => selectedContact.id === contactId ? 'active' : undefined

  return (
    <section className="contact-list">
      <ul>
        {contacts.map(contact =>
          <li key={contact.id}>
            <button className={activeChatClass(contact.id)} onClick={() => {
              onSelect(contact)
            }}>
              {contact.name}
            </button>
          </li>
        )}
      </ul>
    </section>
  )
}