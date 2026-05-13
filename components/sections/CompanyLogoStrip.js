import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function CompanyLogoStrip({ logos }) {
  return (
    <section className="logo-strip-section" aria-label="Companies Naomi has worked with">
      <div className="container">
        <Reveal className="logo-strip-header">
          <div className="section-label">Trusted Across Teams</div>
          <p>Experience across fintech, talent platforms, consulting, insurance, and distributed technical teams.</p>
        </Reveal>

        <Reveal className="logo-strip" delay={120}>
          {logos.map((item) => (
            <div key={item.name} className="logo-strip-item">
              <Image src={item.logo} alt={item.logoAlt} className="logo-strip-image" />
              <span>{item.name}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
