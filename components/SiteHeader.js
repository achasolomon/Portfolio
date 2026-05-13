"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import navLogoImage from "@/app/assets/smith.jpg";

export default function SiteHeader({ links }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener("resize", closeMenu);

    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveHref(`#${visibleEntry.target.id}`);
        }
      },
      {
        rootMargin: "-28% 0px -55% 0px",
        threshold: [0.2, 0.45, 0.7]
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [links]);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <Link href="#" className="nav-logo">
        <span className="nav-logo-mark">
          <Image src={navLogoImage} alt="" fill sizes="36px" priority />
        </span>
        <span>Naomi Smith</span>
      </Link>

      <nav aria-label="Primary navigation">
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={activeHref === link.href ? "active" : ""}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Link href="#contact" className="nav-cta">
        Let&apos;s Connect
      </Link>

      <button
        type="button"
        className="menu-button"
        aria-expanded={menuOpen}
        aria-controls="mobile-nav"
        onClick={() => setMenuOpen((open) => !open)}
      >
        Menu
      </button>

      {menuOpen ? (
        <div id="mobile-nav" className="mobile-panel">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={activeHref === link.href ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>
            Let&apos;s Connect
          </Link>
        </div>
      ) : null}
    </header>
  );
}
