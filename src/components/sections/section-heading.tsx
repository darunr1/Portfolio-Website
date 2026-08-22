export function SectionHeading({
  id,
  number,
  title,
  description,
}: {
  id: string;
  number: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="section-heading">
      <div className="section-heading__index">
        <span className="section-node" aria-hidden="true" />
        <span>{number}</span>
      </div>
      <div>
        <h2 id={id}>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
    </header>
  );
}
