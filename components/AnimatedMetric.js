"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedMetric({ value, suffix, label }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) {
      return undefined;
    }

    const duration = 1800;
    const startTime = performance.now();
    let frameId = 0;

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    frameId = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frameId);
  }, [value, visible]);

  return (
    <div ref={ref} className={`metric-item reveal ${visible ? "visible" : ""}`}>
      <div className="metric-number">
        {count.toLocaleString()}
        <span className="suffix">{suffix}</span>
      </div>
      <div className="metric-label">
        {label.map((line) => (
          <div key={line}>{line}</div>
        ))}
      </div>
    </div>
  );
}
