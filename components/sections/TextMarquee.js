export default function TextMarquee({ items }) {
  const loop = [...items, ...items];

  return (
    <div className="text-marquee-section" aria-hidden="true">
      <div className="text-marquee-track">
        {loop.map((item, index) => (
          <span key={`${item}-${index}`}>
            {item}
            {index < loop.length - 1 ? <span className="dot"> / </span> : null}
          </span>
        ))}
      </div>
    </div>
  );
}
