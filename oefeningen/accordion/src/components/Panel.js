import { useState } from "react"

function Panel({
  title,
  children
}) {
  const [isActive, setIsActive] = useState(false)

  return (
    <section className={`panel ${isActive && 'active'}`}>
      <h3 onClick={() => setIsActive(!isActive)}>{title}</h3>
      {isActive && (
        <p>{children}</p>
      )}
    </section>
  )
}

export default Panel