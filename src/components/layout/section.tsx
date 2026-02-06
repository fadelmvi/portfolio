"use client";

import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-20 md:py-32", className)}
    >
      <div className="mx-auto max-w-6xl px-6">
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ title, subtitle, className }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={cn("mb-12 md:mb-16", className)}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        {title}
        <span className="text-zinc-500">.</span>
      </h2>
      {subtitle && (
        <p className="text-lg text-zinc-400 max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
