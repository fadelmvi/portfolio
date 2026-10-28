import { getSkills } from "@/lib/content";
export function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="shell content-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span>02 /</span> MY TOOLKIT
            </p>
            <h2>
              The tools behind
              <br />
              the possibilities<span>.</span>
            </h2>
          </div>
          <p>
            The right technology for the right problem.
            <br className="desktop-break" /> Here’s what I work with.
          </p>
        </div>
        <div className="skills-grid">
          {getSkills().categories.map((c) => (
            <article className="skill-card" key={c.name}>
              <h3>{c.name}</h3>
              <div className="skill-items">
                {c.skills.map((s) => (
                  <span key={s.name}>{s.name}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
