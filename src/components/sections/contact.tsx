import { ArrowUpRight } from "lucide-react";
import { getProfile } from "@/lib/content";
export function Contact() {
  const p = getProfile();
  return (
    <section id="contact" className="shell contact-section">
      <p className="eyebrow">
        <span>04 /</span> WHAT’S NEXT?
      </p>
      <div className="contact-layout">
        <div>
          <h2>
            Great things start
            <br />
            with a <span>hello.</span>
          </h2>
          <p>
            Have an idea, an opportunity, or just something to share?
            <br />
            Let’s make a connection.
          </p>
          <a className="email-link" href={`mailto:${p.email}`}>
            {p.email}
            <ArrowUpRight size={24} />
          </a>
        </div>
        <a
          className="contact-circle"
          href={`mailto:${p.email}`}
          aria-label="Send Fadel an email"
        >
          <ArrowUpRight size={58} strokeWidth={1} />
        </a>
      </div>
    </section>
  );
}
