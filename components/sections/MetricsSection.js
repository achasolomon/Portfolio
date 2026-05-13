import AnimatedMetric from "@/components/AnimatedMetric";
import Reveal from "@/components/Reveal";

export default function MetricsSection({ metrics }) {
  return (
    <section id="metrics" className="metrics-section">
      <div className="container">
        <Reveal className="metrics-intro">
          <div className="section-label">Impact at Scale</div>
          <h2>
            Measurable outcomes
            <br />
            across every engagement.
          </h2>
        </Reveal>

        <div className="metrics-grid">
          {metrics.map((metric) => (
            <AnimatedMetric key={metric.label.join("-")} {...metric} />
          ))}
        </div>
      </div>
    </section>
  );
}
