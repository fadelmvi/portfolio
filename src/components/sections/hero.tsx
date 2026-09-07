import Image from "next/image";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Asterisk } from "lucide-react";
import { getProfile, getAssetPath } from "@/lib/content";
export function Hero() {
  const p = getProfile();
  return (
    <section id="home" className="hero shell">
      <div className="hero-top">
        <span className="eyebrow">INDEPENDENT MIND. ENGINEERING FOCUS.</span>
        <span className="eyebrow hero-coordinate">
          BASED IN {p.location.toUpperCase()}
        </span>
      </div>
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
            <i />
            <span>WEB & MOBILE</span>
          </div>
        </div>
        <a className="studio-preview" href="#projects" aria-label="Explore my selected projects">
          <div className="studio-heading"><span>THE BUILDER’S DESK</span><Asterisk size={26} /></div>
          <div className="studio-statement">Small details.<br />Big possibilities.</div>
          <div className="studio-window">
            <div className="studio-toolbar"><span><i /><i /><i /></span><span>mindora / workspace</span><ArrowUpRight size={13} /></div>
            <div className="studio-screen"><Image src={getAssetPath("/images/projects/mindora-1.jpeg")} alt="Mindora activity report and assistant interface" fill sizes="(max-width: 700px) 85vw, 440px" priority /></div>
          </div>
          <div className="studio-sticker"><span>&lt;/&gt;</span> MADE OF CURIOSITY<br />& A LITTLE CODE.</div>
          <div className="studio-footer"><span>IDEA → BUILD → ITERATE</span><span>01 / 2026</span></div>
        </a>
      </div>
      <div className="hero-bottom">
        <span>CRAFTED WITH INTENTION. DRIVEN BY CURIOSITY.</span>
        <a href="#projects">
          SCROLL TO EXPLORE <ArrowDown size={14} />
        </a>
      </div>
    </section>
  );
}
