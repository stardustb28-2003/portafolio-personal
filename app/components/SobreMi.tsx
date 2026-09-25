"use client";

import { motion } from "framer-motion";

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="border-t border-hairline">
      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-16 sm:gap-10 sm:px-6 sm:py-24 md:grid-cols-[2fr_1fr] lg:px-8 xl:max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-soft">
            Sobre mí
          </p>
          <blockquote className="mt-4 font-[family-name:var(--font-display)] font-semibold tracking-[-0.04em] text-2xl leading-tight sm:text-4xl lg:text-5xl">
            Optimizar la lógica en la gestión de datos y diseñar interfaces de
            usuario eficientes y escalables.
          </blockquote>
          <p className="mt-6 max-w-lg text-sm text-ink-soft sm:text-base">
            Soy un desarrollador en formación enfocado en la arquitectura de
            bases de datos y el desarrollo de interfaces de usuario.
          </p>
          <p className="mt-6 max-w-lg text-sm text-ink-soft sm:text-base">
            Busco incorporarme a proyectos desafiantes donde pueda aplicar mis
            conocimientos técnicos y adquirir experiencia práctica, aportando
            valor tanto en la estructuración de modelos relacionales/NoSQL
            como en la implementación de frontends interactivos y escalables.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="card self-start p-5 font-mono text-sm text-ink-soft"
        >
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-ink">Herramientas de desarrollo</p>
          <ul className="space-y-1.5">
            <li>Next.js / React</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>Supabase</li>
            <li>Firebase</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}