"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#stack", label: "Stack" },
  { href: "#trayectoria", label: "Trayectoria" },
  { href: "#trabajo", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        scrolled
          ? "border-hairline bg-paper/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8 xl:max-w-6xl">
        <a
          href="#inicio"
          className="inline-flex items-center gap-2 font-[family-name:var(--font-display)] text-base font-semibold tracking-tight text-ink"
        >
          <span aria-hidden="true" className="text-sm">▲</span>
          <span>
            Brayan<span className="text-ink-soft">.dev</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 text-sm text-ink-soft md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative rounded-md px-3 py-1.5 transition-colors hover:bg-surface hover:text-ink ${
                active === l.href ? "text-ink" : ""
              }`}
            >
              {l.label}
              {active === l.href && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-x-3 bottom-0 h-px bg-ink"
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-hairline text-ink md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-hairline md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-3 text-sm text-ink-soft sm:px-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-2 py-2.5 transition-colors hover:bg-surface hover:text-ink ${
                    active === l.href ? "text-ink" : ""
                  }`}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
