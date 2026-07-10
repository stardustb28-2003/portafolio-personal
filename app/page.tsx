const work = [
  {
    n: "01",
    title: "Nombre del Proyecto Uno",
    role: "Frontend · Diseño de producto",
    year: "2025",
    desc: "Una línea contando qué resolviste y para quién.",
  },
  {
    n: "02",
    title: "Nombre del Proyecto Dos",
    role: "Full-stack",
    year: "2024",
    desc: "Una línea contando qué resolviste y para quién.",
  },
  {
    n: "03",
    title: "Nombre del Proyecto Tres",
    role: "Diseño UI",
    year: "2024",
    desc: "Una línea contando qué resolviste y para quién.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <header className="mx-auto max-w-5xl px-6 pt-10">
        <div className="flex items-baseline justify-between border-b border-hairline pb-3 font-mono text-[11px] uppercase tracking-widest text-ink-soft">
          <span>Portafolio Profesional</span>
          <span>Lima, Perú</span>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 pt-16 pb-20">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-signal">
          Desarrollo · Diseño de producto
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-[13vw] leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
          Conde Palomino Brayan Aldair
        </h1>
        <p className="mt-6 max-w-xl font-[family-name:var(--font-display)] text-xl italic text-ink-soft">
          Construyo interfaces cuidadas y las llevo a producción de punta a
          punta — del boceto al despliegue.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-widest text-ink-soft">
          <span>Disponible para proyectos</span>
          <span className="h-1 w-1 rounded-full bg-signal" />
          <a href="#contacto" className="text-ink underline decoration-hairline underline-offset-4 hover:text-signal">
            Escríbeme
          </a>
        </div>
      </section>

      <section id="trabajo" className="mx-auto max-w-5xl px-6 pb-24">
        <div className="mb-6 flex items-end justify-between border-b border-hairline pb-3">
          <h2 className="font-[family-name:var(--font-display)] text-2xl">
            Trabajo seleccionado
          </h2>
          <span className="font-mono text-xs uppercase tracking-widest text-ink-soft">
            {work.length} proyectos
          </span>
        </div>

        <ul>
          {work.map((item) => (
            <li key={item.n} className="group border-b border-hairline">
              <a href="#" className="flex items-center gap-6 py-7">
                <span className="font-mono text-sm text-ink-soft">
                  {item.n}
                </span>

                <div className="flex-1">
                  <h3 className="font-[family-name:var(--font-display)] text-2xl transition-colors group-hover:text-signal sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink-soft">{item.desc}</p>
                </div>

                <span className="hidden font-mono text-xs uppercase tracking-widest text-ink-soft sm:block">
                  {item.role}
                </span>
                <span className="font-mono text-xs text-ink-soft">
                  {item.year}
                </span>
                <span className="translate-x-0 text-signal opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section id="sobre-mi" className="border-t border-hairline bg-ink text-paper">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-24 md:grid-cols-[2fr_1fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold">
              Sobre mí
            </p>
            <blockquote className="mt-4 font-[family-name:var(--font-display)] text-3xl italic leading-snug sm:text-4xl">
              Cuenta aquí en una frase cuál es tu enfoque o filosofía de trabajo.
            </blockquote>
            <p className="mt-6 max-w-lg text-paper/70">
              Un párrafo corto: quién eres, qué tipo de proyectos te
              interesan, y qué te diferencia. Dos o tres frases son
              suficientes — esto es una portada, no tu CV completo.
            </p>
          </div>

          <div className="font-mono text-xs uppercase tracking-widest text-paper/60">
            <p className="mb-2 text-gold">Herramientas</p>
            <ul className="space-y-1">
              <li>Next.js / React</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Supabase</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </section>

      <footer id="contacto" className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl">
          Hablemos.
        </h2>
        <a href="StardustB28@hotmail.com" className="mt-4 inline-block border-b border-ink text-lg hover:text-signal hover:border-signal">
          StardustB28@hotmail.com
        </a>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-6 font-mono text-xs uppercase tracking-widest text-ink-soft">
          <span>© 2026 Conde Palomino, Brayan Aldair</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-signal">GitHub</a>
            <a href="https://www.linkedin.com/in/brayan-aldair-conde-palomino-292a5b399/" target="_blank" rel="noopener noreferrer" className="hover:text-signal">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  );
}