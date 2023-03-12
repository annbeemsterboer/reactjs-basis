import Panel from "./Panel"

export default function Accordion({ title, panels }) {
  return (
    <>
      <h2>{title}</h2>
      {panels.map((panel, index) =>
        <Panel
          key={index}
          title={panel.title}
        >
          {panel.body}
        </Panel>)}
    </>
  )
}