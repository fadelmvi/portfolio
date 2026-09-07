import { getExperiences } from "@/lib/content";
import { formatDate } from "@/lib/utils";
export function Experience() {
  return (
    <section
      id="experience"
      className="shell content-section experience-section"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">
            <span>02 /</span> THE JOURNEY
          </p>
          <h2>
            Always building.
            <br />
            Always growing<span>.</span>
          </h2>
        </div>
        <p>
          Hands-on experience, meaningful challenges,
          <br className="desktop-break" /> and a little more curiosity every
          day.
        </p>
      </div>
      <div className="experience-list">
        {getExperiences().map((e) => (
          <article key={e.id} className="experience-row">
            <div className="experience-date">
              <span>
                {formatDate(e.startDate)} —{" "}
                {e.current ? "Present" : formatDate(e.endDate!)}
              </span>
              <p>
                {e.type} · {e.location}
              </p>
            </div>
            <div className="experience-detail">
              <div className="company-line">
                <h3>{e.company}</h3>
                {e.current && <span className="current-badge">CURRENT</span>}
              </div>
              <h4>{e.role}</h4>
              <p>{e.description}</p>
              {e.highlights.length > 0 && (
                <details>
                  <summary>
                    What I worked on <span>+</span>
                  </summary>
                  <ul>
                    {e.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </details>
              )}
            </div>
            <div className="tags experience-tags">
              {e.technologies.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
