"use client";

import { motion } from "motion/react";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/layout/section";
import { getProfile } from "@/lib/content";

export function Contact() {
  const profile = getProfile();

  const contactLinks = [
    {
      name: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: Mail,
      description: "Send me an email",
    },
    {
      name: "GitHub",
      value: "fadelmvi",
      href: profile.social.github,
      icon: Github,
      description: "Check out my code",
    },
    {
      name: "LinkedIn",
      value: "fadellmuhammad",
      href: profile.social.linkedin,
      icon: Linkedin,
      description: "Let's connect",
    },
  ];

  return (
    <Section id="contact">
      <SectionHeader
        title="Contact"
        subtitle="Feel free to reach out if you want to build something together, have a question, or just want to connect."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {contactLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.href}
            target={link.name !== "Email" ? "_blank" : undefined}
            rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            whileHover={{ y: -4 }}
            className="group p-6 rounded-xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm hover:border-zinc-700 hover:bg-zinc-900/80 transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-lg bg-zinc-800 text-zinc-300 group-hover:bg-zinc-700 group-hover:text-white transition-all">
                <link.icon size={24} />
              </div>
              <ArrowUpRight
                size={20}
                className="text-zinc-600 group-hover:text-zinc-400 transition-colors"
              />
            </div>
            <h3 className="text-lg font-semibold text-white mb-1">
              {link.name}
            </h3>
            <p className="text-sm text-zinc-400 mb-2">{link.description}</p>
            <p className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors truncate">
              {link.value}
            </p>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-16 text-center"
      >
        <p className="text-zinc-400 mb-6">
          Prefer a more direct approach?
        </p>
        <a href={`mailto:${profile.email}`}>
          <Button size="lg" className="gap-2">
            <Mail size={20} />
            Send me an email
          </Button>
        </a>
      </motion.div>
    </Section>
  );
}
