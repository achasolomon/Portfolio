"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Reveal from "@/components/Reveal";

export default function HeroSection({ hero }) {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY >= window.innerHeight) {
        return;
      }

      if (leftRef.current) {
        leftRef.current.style.transform = `translateY(${scrollY * 0.15}px)`;
      }

      if (rightRef.current) {
        rightRef.current.style.transform = `translateY(${scrollY * 0.08}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="hero" className="hero">
      <div ref={leftRef} className="hero-left">
        <div className="hero-content">
          <Reveal as="div" className="hero-eyebrow">
            {hero.eyebrow}
          </Reveal>

          <Reveal as="h1" className="hero-title" delay={120}>
            {hero.title[0]}
            <em>{hero.title[1]}</em>
            {hero.title[2]}
          </Reveal>

          <Reveal as="p" className="hero-subtitle" delay={220}>
            {hero.subtitle}
          </Reveal>

          <Reveal className="hero-actions" delay={300}>
            {hero.actions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                className={action.variant === "primary" ? "btn-primary" : "btn-secondary"}
                download={action.download}
              >
                {action.label}
              </a>
            ))}
          </Reveal>
        </div>

        <Reveal as="div" className="hero-scroll" delay={420}>
          <div className="hero-scroll-line" />
          <span>Scroll to explore</span>
        </Reveal>
      </div>

      <div ref={rightRef} className="hero-right">
        <div className="hero-image-container">
          <div className="hero-image-bg">
            <div className="hero-number">{hero.statNumber}</div>
            <Image
              src={hero.image}
              alt={hero.imageAlt}
              fill
              priority
              className="hero-image"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <Reveal as="div" className="hero-image-text" delay={320}>
            <span className="name">{hero.imageName}</span>
            <span className="role">{hero.imageRole}</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
