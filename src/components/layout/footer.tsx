import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { getProfile } from "@/lib/content";

export function Footer() {
  const profile = getProfile();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link
              href="/"
              className="text-xl font-bold text-white hover:text-zinc-300 transition-colors"
            >
              Fadel<span className="text-zinc-500">.</span>
            </Link>
            <p className="text-sm text-zinc-500">
              Handcrafted by me © {currentYear}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-all"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-all"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
