"use client";

import { motion } from "motion/react";
import { Section, SectionHeader } from "@/components/layout/section";
import { getSkills } from "@/lib/content";

export function Skills() {
  const skillsData = getSkills();

  return (
    <Section id="skills" className="bg-zinc-900/30">
      <SectionHeader title="Skills" />

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {skillsData.categories.map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              delay: categoryIndex * 0.1,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: categoryIndex * 0.1 + skillIndex * 0.05,
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-sm font-medium hover:border-zinc-600 hover:bg-zinc-800 transition-all cursor-default"
                >
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
