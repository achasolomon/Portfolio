import Image from "next/image";
import Reveal from "@/components/Reveal";
import SocialIcon from "@/components/SocialIcon";

export default function ContactSection({ contactDetails, photo }) {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-inner">
          <Reveal className="contact-photo" delay={80}>
            <Image
              src={photo.image}
              alt={photo.alt}
              fill
              className="contact-photo-image"
              sizes="96px"
            />
          </Reveal>

          <Reveal as="div" className="section-label">
            Get In Touch
          </Reveal>

          <Reveal as="h2" delay={100}>
            Ready to build
            <br />
            <em>something lasting?</em>
          </Reveal>

          <Reveal as="p" delay={200}>
            {contactDetails.intro}
          </Reveal>

          <Reveal className="contact-actions" delay={300}>
            <a href={contactDetails.primaryAction.href} className="btn-primary">
              {contactDetails.primaryAction.label}
            </a>
            <a
              href={contactDetails.secondaryAction.href}
              className="btn-secondary"
              download={contactDetails.secondaryAction.download}
            >
              {contactDetails.secondaryAction.label}
            </a>
            <a href={contactDetails.emailAction.href} className="btn-secondary">
              {contactDetails.emailAction.label}
            </a>
          </Reveal>

          <Reveal className="contact-divider" delay={380} />

          <Reveal className="contact-details" delay={420}>
            {contactDetails.details.map((detail) => (
              <div key={detail.label} className="contact-detail-item">
                <span className="label">{detail.label}</span>
                <span className="value">{detail.value}</span>
              </div>
            ))}
          </Reveal>

          <Reveal className="contact-socials" delay={480}>
            {contactDetails.socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
              >
                <span className="social-icon-wrap">
                  <SocialIcon name={social.label} />
                </span>
                <strong>{social.handle}</strong>
              </a>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
