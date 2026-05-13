import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function PhilosophySection({ philosophy, photo }) {
  return (
    <section id="philosophy" className="philosophy-section">
      <div className="container">
        <div className="philosophy-inner">
          <Reveal className="philosophy-photo" delay={80}>
            <Image
              src={photo.image}
              alt={photo.alt}
              fill
              className="philosophy-photo-image"
              sizes="160px"
            />
          </Reveal>

          <Reveal as="div" className="section-label">
            Recruiting Approach
          </Reveal>

          <Reveal as="p" className="philosophy-quote" delay={120}>
            &quot;I have led recruitment teams, partnered with senior stakeholders to develop
            hiring strategies, and implemented recruitment processes that improve{" "}
            <em>{philosophy.emphasis}</em>.&quot;
          </Reveal>

          <Reveal as="p" className="philosophy-photo-caption" delay={180}>
            {photo.caption}
          </Reveal>

          <div className="philosophy-pillars">
            {philosophy.pillars.map((pillar, index) => (
              <Reveal key={pillar.number} className="pillar" delay={index * 100}>
                <div className="pillar-number">{pillar.number}</div>
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
