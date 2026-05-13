import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function AboutSection({ about }) {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <Reveal className="about-media">
            <div className="about-portrait">
              <Image
                src={about.image}
                alt={about.imageAlt}
                fill
                className="about-portrait-image"
                sizes="(max-width: 1024px) 100vw, 34vw"
              />
              <div className="about-portrait-lines" />
            </div>
          </Reveal>

          <div className="about-copy">
            <Reveal as="div" className="section-label">
              About
            </Reveal>

            <Reveal as="h2" delay={100}>
              {about.title[0]}
              <br />
              <em>{about.title[1]}</em>
              <br />
              {about.title[2]}
            </Reveal>

            {about.body.map((paragraph, index) => (
              <Reveal key={paragraph} as="p" className="about-body" delay={180 + index * 90}>
                {paragraph}
              </Reveal>
            ))}

            <Reveal className="about-quote" delay={320}>
              <p>&quot;{about.quote}&quot;</p>
            </Reveal>

            <Reveal className="about-pills" delay={420}>
              {about.pills.map((pill) => (
                <span key={pill} className="pill">
                  {pill}
                </span>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
