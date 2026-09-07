"use client";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
const links = [
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Skills", "skills"],
];
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="shell nav-bar" aria-label="Main navigation">
        <a className="wordmark" href="#home" aria-label="Fadel home">
          fadel<span>®</span>
        </a>
        <div className="desktop-nav">
          {links.map(([name, id]) => (
            <a key={id} href={`#${id}`}>
              {name}
            </a>
          ))}
        </div>
        <a href="#contact" className="nav-contact">
          Let’s talk <ArrowUpRight size={16} />
        </a>
        <button
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        {open && (
          <div id="mobile-nav" className="mobile-nav">
            {[...links, ["Contact", "contact"]].map(([name, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
                {name}
                <ArrowUpRight size={16} />
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
