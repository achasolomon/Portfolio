import Reveal from "@/components/Reveal";

export default function TestimonialsSection({ testimonials }) {
  const loop = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <Reveal as="div" className="section-label">
          Credentials
        </Reveal>
      </div>

      <div className="testimonials-marquee">
        <div className="testimonials-track">
          {loop.map((testimonial, index) => (
            <article key={`${testimonial.title}-${index}`} className="testimonial-card">
              <p className="testimonial-text">{testimonial.body}</p>
              <div className="testimonial-author">
                <strong>{testimonial.title}</strong>
                {testimonial.meta}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
