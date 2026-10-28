import { ArrowDown, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { getProfile, getAssetPath } from "@/lib/content";
export function Hero() {
  const p = getProfile();
  return (
    <section id="home" className="hero shell">
      <div className="hero-layout">
        <div className="hero-copy">
          {p.available && (
            <div className="availability">
              <span />
              Available for opportunities
            </div>
          )}
          <h1>
            Thoughtful code.
            <br />
            Real-world <span>impact.</span>
          </h1>
          <p className="hero-intro">
            Hi, I’m <strong>{p.fullName}</strong> — a {p.title.toLowerCase()}{" "}
            turning complex problems into thoughtful digital experiences.
          </p>
          <div className="hero-actions">
            <a className="action primary" href="#projects">
              Explore my work <ArrowUpRight size={18} />
            </a>
            <a
              className="action secondary"
              href={getAssetPath(p.resumeUrl)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download résumé <ArrowDown size={17} />
            </a>
          </div>
          <div className="hero-social">
            <span>FIND ME ON</span>
            <a
              href={p.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={p.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
        <aside className="hero-aside" aria-label="Profile overview">
          <div className="hero-highlight">
            <span>DEV</span>
            <p>Software engineer</p>
          </div>
          <div className="hero-aside-details">
            <div>
              <span>FOCUS</span>
              <p>Web &amp; mobile</p>
            </div>
            <div>
              <span>BASED IN</span>
              <p>{p.location}</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
