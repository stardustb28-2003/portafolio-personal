"use client";

import type { ElementType } from "react";
import { motion } from "framer-motion";
import { Code2, Database, LayoutGrid, Server, GitBranch, Cloud } from "lucide-react";
import { skills, type Skill } from "../Lib/data";

const icons: Record<Skill["icon"], ElementType> = {
  code: Code2,
  database: Database,
  layout: LayoutGrid,
  server: Server,
  git: GitBranch,
  cloud: Cloud,
};

export default function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8 xl:max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mb-8 border-b border-hairline pb-3"
      >
        <p className="font-mono text-sm uppercase tracking-[0.25em] text-gold">Stack</p>
        <h2 className="mt-2 font-[family-name:var(--font-display)] text-xl sm:text-2xl lg:text-3xl">
          Herramientas que uso
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill, i) => {
          const Icon = icons[skill.icon];
          return (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-hairline p-5 transition-colors hover:border-signal/50"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-signal transition-colors group-hover:border-signal">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg">
                {skill.title}
              </h3>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-ink-soft">
                {skill.level}
              </p>
              <ul className="mt-3 space-y-1 text-sm text-ink-soft">
                {skill.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}