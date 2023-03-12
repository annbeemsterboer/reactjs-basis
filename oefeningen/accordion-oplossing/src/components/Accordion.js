import { useState } from "react"

import Panel from "./Panel"

export default function Accordion({ title, panels }) {
  const [activeIndex, setActiveIndex] = useState(undefined)

  const toggleActive = (index) => activeIndex === index ? setActiveIndex(undefined) : setActiveIndex(index)

  return (
    <>
      <h2>{title}</h2>
      {panels.map((panel, index) =>
        <Panel
          key={index}
          title={panel.title}
          isActive={activeIndex === index}
          onShow={() => toggleActive(index)}
        >
          {panel.body}
        </Panel>)}
    </>
  )
}