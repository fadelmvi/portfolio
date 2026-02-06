"use client";

import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Section, SectionHeader } from "@/components/layout/section";
import { getExperiences } from "@/lib/content";
import { formatDate } from "@/lib/utils";

export function Experience() {
  const experiences = getExperiences();

  return (
    <Section id="experience">
      <SectionHeader
        title="Experience"
        subtitle="I have worked with various companies and startups, building web and mobile applications."
      />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 transform md:-translate-x-1/2" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-zinc-800 border-4 border-zinc-950 rounded-full transform -translate-x-1/2 mt-1.5">
                {exp.current && (
                  <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse" />
                )}
              </div>

              {/* Content */}
              <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm hover:border-zinc-700 transition-all">
                  <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <Briefcase size={16} className="text-zinc-500" />
                    <span className="text-sm font-medium text-zinc-300">
                      {exp.company}
                    </span>
                    {exp.current && (
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                        Current
                      </Badge>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3">
                    {exp.role}
                  </h3>

                  <div className={`flex flex-wrap gap-4 text-sm text-zinc-500 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {formatDate(exp.startDate)} — {exp.current ? "Present" : formatDate(exp.endDate!)}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>

                  <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className={`flex items-start gap-2 text-sm text-zinc-400 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                        <Check size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Empty space for timeline layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
