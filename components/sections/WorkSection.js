import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function WorkSection({ cases, photo }) {
  return (
    <section id="work" className="work-section">
      <div className="container work-intro">
        <div>
          <Reveal as="div" className="section-label">
            Focus Areas
          </Reveal>

          <Reveal as="h2" delay={100}>
            Recruiting strengths
            <br />
            across global teams.
          </Reveal>
        </div>

        <Reveal className="work-photo" delay={180}>
          <Image
            src={photo.image}
            alt={photo.alt}
            fill
            className="work-photo-image"
            sizes="(max-width: 1024px) 100vw, 34vw"
          />
          <div className="work-photo-caption">
            <span>{photo.eyebrow}</span>
            <p>{photo.caption}</p>
          </div>
        </Reveal>
      </div>

      <div className="cases-grid reveal visible">
        {cases.map((item) => (
          <article key={item.number} className="case-card">
            <div className="case-number">{item.number}</div>

            <div>
              <div className="case-org">{item.org}</div>
              <h3 className="case-title">{item.title}</h3>
              <div className="case-meta">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <p className="case-body">{item.body}</p>
            </div>

            <div className="case-impact">
              <div className="case-impact-label">{item.resultLabel}</div>
              <div className="case-result">
                <strong>{item.resultNumber}</strong>
                {item.resultText}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
