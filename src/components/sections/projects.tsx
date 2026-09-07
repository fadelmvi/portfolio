"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowDown, ArrowUp, Github, Languages, Sparkles } from "lucide-react";
import { getProjects, getAssetPath } from "@/lib/content";
export function Projects() {
  const projects = getProjects();
  const [showAll, setShowAll] = useState(false);
  return (
    <section id="projects" className="shell content-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">
            <span>01 /</span> SELECTED WORK
          </p>
          <h2>
            Selected work<span>.</span>
          </h2>
        </div>
        <p>
          A selection of applications, experiments,
          <br className="desktop-break" /> and ideas turned into something real.
        </p>
      </div>
      <div className="project-grid" id="project-grid">
        {(showAll ? projects : projects.slice(0, 4)).map((p, i) => (
          <article className={`project-card project-${p.id}`} key={p.id}>
            <div className="project-image">
              {p.thumbnail.endsWith(".svg") ? (
                <div className={`project-art ${p.id === "lingoria" ? "translation-art" : "brand-art"}`} aria-hidden="true">
                  {p.id === "lingoria" ? <>
                    <div className="translation-label"><Languages size={20} /> TWO LANGUAGES. ONE CONVERSATION.</div>
                    <div className="translation-word">Hello<span>Halo.</span></div>
                    <div className="translation-caption">EN <span>↔</span> ID <span className="translation-line" /> Lingoria</div>
                  </> : <>
                    <div className="brand-art-top"><Sparkles size={24} /><span>{p.technologies[0]} / {p.year}</span></div>
                    <div className="brand-art-name">{p.title}<span>✳</span></div>
                    <div className="brand-art-caption">{p.technologies.slice(1).join(" · ") || p.category}<ArrowUpRight size={22} /></div>
                  </>}
                </div>
              ) : (
                <div className="project-browser">
                  <div className="project-browser-bar"><span>● ● ●</span><span>{p.title.toLowerCase()} / preview</span><ArrowUpRight size={12} /></div>
                  <div className="project-screen"><Image
                    src={getAssetPath(p.thumbnail)}
                    alt={`${p.title} project preview`}
                    fill
                    sizes="(max-width: 700px) 90vw, 600px"
                    className="project-thumbnail"
                  /></div>
                </div>
              )}
              <span className="project-number">
                {String(i + 1).padStart(2, "0")} / {p.year}
              </span>
              {p.featured && <span className="featured-label">SELECTED</span>}
            </div>
            <div className="project-info">
              <div className="project-title">
                <h3>{p.title}</h3>
                <div className="project-links">
                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${p.title} on GitHub`}
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${p.title}`}
                    >
                      <ArrowUpRight size={20} />
                    </a>
                  )}
                </div>
              </div>
              <p>{p.description}</p>
              <div className="tags">
                {p.technologies.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
      {projects.length > 4 && (
        <div className="projects-more">
          <span>
            {String(showAll ? projects.length : 4).padStart(2, "0")} OF{" "}
            {projects.length} PROJECTS
          </span>
          <button
            className="action secondary"
            aria-expanded={showAll}
            aria-controls="project-grid"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show less" : "View all projects"}
            {showAll ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
          </button>
        </div>
      )}
    </section>
  );
}
