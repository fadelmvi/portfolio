import { ArrowUpRight } from "lucide-react";
import { getProfile } from "@/lib/content";
export function Footer() {
  const p = getProfile();
  return (
    <footer className="shell site-footer">
      <div>
        <a className="wordmark" href="#home">
          fadel<span>®</span>
        </a>
        <p>
          © {new Date().getFullYear()} {p.fullName}
        </p>
      </div>
      <div className="footer-links">
        <a href={p.social.github} target="_blank" rel="noopener noreferrer">
          GitHub <ArrowUpRight size={14} />
        </a>
        <a href={p.social.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn <ArrowUpRight size={14} />
        </a>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}
