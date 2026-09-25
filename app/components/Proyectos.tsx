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
        className="mb-6 flex items-end justify-between"
      >
        <h2 className="font-[family-name:var(--font-display)] font-semibold tracking-[-0.03em] text-2xl sm:text-3xl lg:text-4xl">
          Trabajo seleccionado
        </h2>
        <span className="font-mono text-xs uppercase tracking-widest text-ink-soft sm:text-sm">
          {projects.length} proyectos
        </span>
      </motion.div>

      <ul className="card divide-y divide-hairline overflow-hidden">
        {projects.map((item, i) => {
          const hasLink = Boolean(item.link);
          const Wrapper = hasLink ? motion.a : motion.div;
          const wrapperProps = hasLink
            ? {
                href: item.link,
                target: item.link!.startsWith("http") ? "_blank" : undefined,
                rel: "noopener noreferrer",
              }
            : {};

          return (
            <motion.li
              key={item.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <Wrapper
                {...wrapperProps}
                whileHover="hover"
                className={`flex items-center gap-3 px-4 py-5 transition-colors sm:gap-6 sm:px-6 sm:py-6 ${hasLink ? "hover:bg-white/[0.03]" : ""} ${
                  hasLink ? "" : "cursor-default"
                }`}
              >
                <span className="font-mono text-sm text-ink-soft sm:text-base">
                  {item.n}
                </span>

                <div className="min-w-0 flex-1">
                  <motion.h3
                    variants={{ hover: hasLink ? { x: 6 } : {} }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className={`font-[family-name:var(--font-display)] font-semibold tracking-[-0.02em] text-lg sm:text-xl lg:text-2xl ${
                      hasLink ? "transition-colors group-hover:text-ink-soft" : ""
                    }`}
                  >
                    {item.title}
                  </motion.h3>
                  <p className="mt-1 line-clamp-2 text-sm text-ink-soft sm:line-clamp-none sm:text-base">
                    {item.desc}
                  </p>
                </div>

                <span className="hidden rounded-full px-2.5 py-0.5 font-mono text-xs text-ink-soft shadow-[0_0_0_1px_#ffffff1a] md:block">
                  {item.role}
                </span>

                {hasLink ? (
                  <span className="font-mono text-sm text-ink-soft">{item.year}</span>
                ) : (
                  <span className="font-mono text-xs uppercase tracking-widest text-ink-soft">
                    Privado
                  </span>
                )}

                {hasLink && (
                  <motion.span
                    variants={{ hover: { x: 4, opacity: 1 } }}
                    initial={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="hidden text-ink sm:inline-block"
                  >
                    <ArrowUpRight size={20} />
                  </motion.span>
                )}
              </Wrapper>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}