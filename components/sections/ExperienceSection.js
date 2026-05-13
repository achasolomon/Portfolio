import Image from "next/image";
import Reveal from "@/components/Reveal";

function getCompanyInitials(company) {
  return company
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
}

export default function ExperienceSection({ experiences }) {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <Reveal as="div" className="section-label">
          Career Timeline
        </Reveal>

        <Reveal as="h2" delay={100}>
          A record of
          <br />
          strategic leadership.
        </Reveal>

        <div className="timeline">
          {experiences.map((experience, index) => (
            <Reveal
              key={`${experience.company}-${experience.role}`}
              className="timeline-item"
              delay={index * 80}
            >
              <div className="timeline-meta">
                <div className="timeline-company-mark" aria-hidden={!experience.logo}>
                  {experience.logo ? (
                    <Image
                      src={experience.logo}
                      alt={experience.logoAlt}
                      fill
                      className="timeline-company-logo"
                      sizes="44px"
                    />
                  ) : (
                    <span>{getCompanyInitials(experience.company)}</span>
                  )}
                </div>
                <div className="timeline-period">{experience.period}</div>
                <div className="timeline-company">{experience.company}</div>
                <div className="timeline-role">{experience.role}</div>
              </div>

              <div className="timeline-content">
                <h4>{experience.title}</h4>
                <p>{experience.body}</p>
                <ul className="timeline-achievements">
                  {experience.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
