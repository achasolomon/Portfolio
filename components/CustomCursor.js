"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine) and (hover: hover)").matches) {
      return;
    }

    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    document.body.classList.add("custom-cursor-ready");

    const cursor = cursorRef.current;
    const ring = ringRef.current;

    if (!cursor || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let frameId = 0;
    let hasMoved = false;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const isHovering = !!e.target.closest("a, button, [role='button']");
      document.body.classList.toggle("cursor-active", isHovering);

      if (!hasMoved) {
        hasMoved = true;
        ringX = e.clientX;
        ringY = e.clientY;
        document.body.classList.add("custom-cursor-visible");
      }
    };

    const animate = () => {
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      frameId = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    frameId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frameId);
      document.body.classList.remove("cursor-active", "custom-cursor-ready", "custom-cursor-visible");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}