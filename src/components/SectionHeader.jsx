export function SectionHeader({ tag, title }) {
  return (
    <div className="section-header">
      <p className="section-tag">{tag}</p>
      <h2>{title}</h2>
    </div>
  )
}
