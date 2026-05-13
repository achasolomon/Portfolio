"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";

export default function ExpertiseSection({ items }) {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.35 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView || isPaused) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % items.length);
    }, 1600);

    return () => window.clearInterval(interval);
  }, [isInView, isPaused, items.length]);

  return (
    <section id="expertise" className="expertise-section" ref={sectionRef}>
      <div className="container">
        <Reveal as="div" className="section-label">
          Areas of Expertise
        </Reveal>

        <Reveal as="h2" delay={100}>
          A comprehensive
          <br />
          people capability.
        </Reveal>

        <div className="expertise-grid">
          {items.map((item, index) => (
            <Reveal
              key={item.number}
              className={`expertise-item ${isInView && activeIndex === index && !isPaused ? "is-active" : ""}`}
              delay={(index % 3) * 100}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onFocus={() => setIsPaused(true)}
              onBlur={() => setIsPaused(false)}
            >
              <div className="expertise-num">{item.number}</div>
              <div>
                <div className="expertise-name">{item.name}</div>
                <div className="expertise-desc">{item.description}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
