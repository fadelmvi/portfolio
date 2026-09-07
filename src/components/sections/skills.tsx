import { Code2, Database, Wrench, ArrowUpRight } from "lucide-react";
import { getSkills } from "@/lib/content";
const icons = [Code2, Database, Wrench];
export function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="shell content-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span>03 /</span> MY TOOLKIT
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
          {getSkills().categories.map((c, i) => {
            const Icon = icons[i] || Code2;
            return (
              <article className="skill-card" key={c.name}>
                <div className="skill-card-top">
                  <Icon size={25} />
                  <span>0{i + 1}</span>
                </div>
                <h3>{c.name}</h3>
                <div className="skill-items">
                  {c.skills.map((s) => (
                    <span key={s.name}>
                      {s.name}
                      <ArrowUpRight size={12} />
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
