import Reveal from "@/components/Reveal";

export default function ImpactSection({ highlights }) {
  return (
    <section id="impact" className="impact-section">
      <div className="container">
        <Reveal as="div" className="section-label">
          Selected Hiring Impact
        </Reveal>

        <Reveal as="h2" delay={100}>
          Proof points
          <br />
          beyond the timeline.
        </Reveal>

        <div className="impact-grid">
          {highlights.map((item, index) => (
            <Reveal key={item.label} className="impact-card" delay={index * 80}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
              <p>{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
