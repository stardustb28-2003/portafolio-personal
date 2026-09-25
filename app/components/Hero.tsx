"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { profile } from "../Lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function useTypedRoles(roles: string[]) {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex % roles.length];
    const speed = deleting ? 35 : 65;
    const pause = 1400;

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const next = current.slice(0, text.length + 1);
          setText(next);
          if (next === current) {
            setTimeout(() => setDeleting(true), pause);
          }
        } else {
          const next = current.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDeleting(false);
            setRoleIndex((i) => i + 1);
          }
        }
      },
      text === current && !deleting ? pause : speed
    );

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex, roles]);

  return text;
}

export default function Hero() {
  const typed = useTypedRoles(profile.roles);

  return (
    <section id="inicio" className="mx-auto max-w-5xl px-4 pt-10 pb-14 sm:px-6 sm:pt-16 sm:pb-20 lg:px-8 lg:pt-24 xl:max-w-6xl">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.p
          variants={item}
          className="font-mono text-sm uppercase tracking-[0.25em] text-ink-soft"
        >
          Desarrollo · Diseño de producto
        </motion.p>

        <motion.div
          variants={item}
          className="mt-4 flex items-center gap-4 sm:gap-6 lg:gap-8"
        >
          <h1 className="font-[family-name:var(--font-display)] font-medium text-[clamp(2.75rem,11vw,7.5rem)] leading-[0.95] tracking-tight">
            {profile.name}
          </h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-64 w-64 shrink-0 overflow-hidden rounded-full ring-1 ring-hairline sm:h-96 sm:w-96 lg:h-[32rem] lg:w-[32rem] grayscale"
          >
            <Image
              src="/Foto.webp"
              alt={`Foto de ${profile.shortName}`}
              fill
              sizes="(min-width: 1024px) 512px, (min-width: 640px) 384px, 256px"
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-6 h-8 font-mono text-base text-ink sm:text-lg"
        >
          {typed}
          <span className="ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[2px] animate-pulse bg-ink align-middle" />
        </motion.p>

        <motion.p
          variants={item}
          className="mt-3 max-w-xl font-[family-name:var(--font-body)] text-lg text-ink-soft sm:text-xl lg:text-2xl"
        >
          {profile.lead}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-sm uppercase tracking-widest text-ink-soft"
        >
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full border border-ink" />
            Disponible para proyectos
          </span>
          <a
            href="#contacto"
            className="text-ink underline decoration-hairline underline-offset-4 transition-colors hover:text-ink-soft"
          >
            Conversemos →
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
