function Panel({
  title,
  children,
  isActive,
  onShow
}) {
  return (
    <section className={`panel ${isActive && 'active'}`}>
      <h3 onClick={onShow}>{title}</h3>
      {isActive && (
        <p>{children}</p>
      )}
    </section>
  )
}

export default Panel