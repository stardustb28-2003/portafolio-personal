"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../Lib/data";

export default function Proyectos() {
  return (
    <section id="trabajo" className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8 xl:max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mb-6 flex items-end justify-between border-b border-hairline pb-3"
      >
        <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl lg:text-3xl">
          Trabajo seleccionado
        </h2>
        <span className="font-mono text-xs uppercase tracking-widest text-ink-soft sm:text-sm">
          {projects.length} proyectos
        </span>
      </motion.div>

      <ul>
        {projects.map((item, i) => (
          <motion.li
            key={item.n}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group border-b border-hairline"
          >
            <motion.a
              href={item.link}
              target={item.link.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              whileHover="hover"
              className="flex items-center gap-3 py-5 sm:gap-6 sm:py-7"
            >
              <span className="font-mono text-sm text-ink-soft sm:text-base">
                {item.n}
              </span>

              <div className="min-w-0 flex-1">
                <motion.h3
                  variants={{ hover: { x: 6 } }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="font-[family-name:var(--font-display)] text-lg transition-colors group-hover:text-signal sm:text-2xl lg:text-3xl"
                >
                  {item.title}
                </motion.h3>
                <p className="mt-1 line-clamp-2 text-sm text-ink-soft sm:line-clamp-none sm:text-base">
                  {item.desc}
                </p>
              </div>

              <span className="hidden font-mono text-sm uppercase tracking-widest text-ink-soft md:block">
                {item.role}
              </span>
              <span className="font-mono text-sm text-ink-soft">{item.year}</span>

              <motion.span
                variants={{ hover: { x: 4, opacity: 1 } }}
                initial={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="hidden text-signal sm:inline-block"
              >
                <ArrowUpRight size={20} />
              </motion.span>
            </motion.a>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}