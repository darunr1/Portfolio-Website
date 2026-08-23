export function SectionHeading({
  id,
  number,
  title,
  description,
  descriptor,
}: {
  id: string;
  number: string;
  title: string;
  description?: string;
  descriptor: string;
}) {
  return (
    <header className="section-heading">
      <div className="section-heading__index">
        <span className="section-node" aria-hidden="true" />
        <span className="section-heading__number">{number}</span>
      </div>
      <div className="section-heading__copy">
        <p className="section-heading__descriptor">{descriptor}</p>
        <h2 id={id}>{title}</h2>
      </div>
      <div className="section-heading__deck">
        {description ? <p>{description}</p> : <span aria-hidden="true" />}
        <span className="section-heading__rule" aria-hidden="true" />
      </div>
    </header>
  );
}
