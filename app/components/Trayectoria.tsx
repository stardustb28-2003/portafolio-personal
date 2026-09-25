"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";
import { education, experience, type TimelineItem } from "../Lib/data";

function TimelineColumn({
  title,
  icon,
  items,
  delayBase = 0,
}: {
  title: string;
  icon: ReactNode;
  items: TimelineItem[];
  delayBase?: number;
}) {
  return (
    <div>
      <h3 className="flex items-center gap-2 font-[family-name:var(--font-display)] font-medium text-lg sm:text-xl">
        {icon}
        {title}
      </h3>

      <div className="relative mt-6 space-y-8 border-l border-hairline pl-6">
        {items.map((it, i) => (
          <motion.article
            key={`${it.title}-${i}`}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: delayBase + i * 0.1 }}
            className="relative"
          >
            <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border border-ink bg-paper ring-4 ring-paper" />
            <span className="font-mono text-xs uppercase tracking-widest text-ink-soft">
              {it.date}
            </span>
            <h4 className="mt-1 font-[family-name:var(--font-display)] font-medium text-base sm:text-lg">
              {it.title}
            </h4>
            <p className="text-sm text-ink-soft">{it.org}</p>
            <ul className="mt-2 space-y-1 text-sm text-ink-soft">
              {it.points.map((p, pi) => (
                <li key={pi} className="flex gap-2">
                  <span className="text-ink-soft">—</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

export default function Trayectoria() {
  return (
    <section
      id="trayectoria"
      className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8 xl:max-w-6xl"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mb-10 border-b border-hairline pb-3"
      >
        <p className="font-mono text-sm uppercase tracking-[0.25em] text-ink-soft">
          Trayectoria
        </p>
        <h2 className="mt-2 font-[family-name:var(--font-display)] font-medium text-xl sm:text-2xl lg:text-3xl">
          Formación y experiencia
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
        <TimelineColumn
          title="Formación"
          icon={<GraduationCap size={18} className="text-ink" />}
          items={education}
        />
        <TimelineColumn
          title="Experiencia"
          icon={<Briefcase size={18} className="text-ink" />}
          items={experience}
          delayBase={0.1}
        />
      </div>
    </section>
  );
}