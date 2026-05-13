import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import AboutSection from "@/components/sections/AboutSection";
import CompanyLogoStrip from "@/components/sections/CompanyLogoStrip";
import ContactSection from "@/components/sections/ContactSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import HeroSection from "@/components/sections/HeroSection";
import ImpactSection from "@/components/sections/ImpactSection";
import MetricsSection from "@/components/sections/MetricsSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TextMarquee from "@/components/sections/TextMarquee";
import WorkSection from "@/components/sections/WorkSection";
import {
  about,
  companyLogos,
  contactDetails,
  credentials,
  expertiseItems,
  experiences,
  hero,
  impactHighlights,
  marqueeItems,
  metrics,
  navLinks,
  photos,
  philosophy,
  workCases
} from "@/data/portfolio";

export default function Page() {
  return (
    <>
      <SiteHeader links={navLinks} />
      <main>
        <HeroSection hero={hero} />
        <TextMarquee items={marqueeItems} />
        <MetricsSection metrics={metrics} />
        <CompanyLogoStrip logos={companyLogos} />
        <AboutSection about={about} />
        <ExperienceSection experiences={experiences} />
        <ImpactSection highlights={impactHighlights} />
        <WorkSection cases={workCases} photo={photos.focus} />
        <PhilosophySection philosophy={philosophy} photo={photos.approach} />
        <ExpertiseSection items={expertiseItems} />
        <TestimonialsSection testimonials={credentials} />
        <ContactSection contactDetails={contactDetails} photo={photos.contact} />
      </main>
      <SiteFooter links={navLinks} />
    </>
  );
}
