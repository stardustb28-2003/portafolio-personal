import Image from "next/image";
import Reveal from "./components/Reveal";

const work = [
  {
    n: "01",
    title: "María Luisa Nutricionista",
    role: "Frontend · Backend · Base de datos",
    year: "2026",
    desc: "Plataforma web comercial para servicios de nutrición preventiva, con tienda, reservas y autenticación segura.",
    link: "https://nutricionistamarialuisa.vercel.app/",
  },
  {
    n: "02",
    title: "Nombre del Proyecto Dos",
    role: "Full-stack",
    year: "2024",
    desc: "Una línea contando qué resolviste y para quién.",
    link: "#",
  },
  {
    n: "03",
    title: "Nombre del Proyecto Tres",
    role: "Diseño UI",
    year: "2024",
    desc: "Una línea contando qué resolviste y para quién.",
    link: "#",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <header className="mx-auto max-w-5xl px-4 pt-6 sm:px-6 sm:pt-10 lg:px-8 xl:max-w-6xl">
        <div className="flex items-baseline justify-between border-b border-hairline pb-3 font-mono text-xs uppercase tracking-widest text-ink-soft sm:text-sm">
          <span>Portafolio Profesional</span>
          <span>Lima, Perú</span>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-4 pt-10 pb-14 sm:px-6 sm:pt-16 sm:pb-20 lg:px-8 lg:pt-24 xl:max-w-6xl">
        <Reveal>
          <p className="font-mono text-sm uppercase tracking-[0.25em] text-signal">
            Desarrollo · Diseño de producto
          </p>
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-4 flex items-center gap-4 sm:gap-6 lg:gap-8">
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.75rem,11vw,7.5rem)] leading-[0.95] tracking-tight">
              Conde Palomino Brayan Aldair
            </h1>
            <div className="relative h-64 w-64 shrink-0 overflow-hidden rounded-full ring-1 ring-hairline sm:h-96 sm:w-96 lg:h-[32rem] lg:w-[32rem]">
              <Image
                src="/Foto.webp"
                alt="Foto de Brayan Conde Palomino"
                fill
                sizes="(min-width: 1024px) 512px, (min-width: 640px) 384px, 256px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-xl font-[family-name:var(--font-display)] text-lg italic text-ink-soft sm:text-xl lg:text-2xl">
            Especializado en el desarrollo full-stack y gestión de bases de datos,
            con enfoque en la ingeniería de software y la preparación de datos para
            inteligencia de negocio.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-sm uppercase tracking-widest text-ink-soft">
            <span>Disponible para proyectos</span>
            <span className="h-1 w-1 rounded-full bg-signal" />
            <a href="#contacto" className="text-ink underline decoration-hairline underline-offset-4 hover:text-signal">
              Escríbeme
            </a>
          </div>
        </Reveal>
      </section>

      <section id="trabajo" className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8 xl:max-w-6xl">
        <Reveal>
          <div className="mb-6 flex items-end justify-between border-b border-hairline pb-3">
            <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl lg:text-3xl">
              Trabajo seleccionado
            </h2>
            <span className="font-mono text-xs uppercase tracking-widest text-ink-soft sm:text-sm">
              {work.length} proyectos
            </span>
          </div>
        </Reveal>

        <ul>
          {work.map((item, i) => (
            <Reveal key={item.n} as="li" delay={i * 100} className="group border-b border-hairline">
              <a href={item.link} target={item.link.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-center gap-3 py-5 sm:gap-6 sm:py-7">
                <span className="font-mono text-sm text-ink-soft sm:text-base">
                  {item.n}
                </span>

                <div className="min-w-0 flex-1">
                  <h3 className="font-[family-name:var(--font-display)] text-lg transition-colors group-hover:text-signal sm:text-2xl lg:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-sm text-ink-soft sm:line-clamp-none sm:text-base">{item.desc}</p>
                </div>

                <span className="hidden font-mono text-sm uppercase tracking-widest text-ink-soft md:block">
                  {item.role}
                </span>
                <span className="font-mono text-sm text-ink-soft">
                  {item.year}
                </span>
                <span className="hidden translate-x-0 text-signal opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100 sm:inline-block">
                  →
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </section>

      <section id="sobre-mi" className="border-t border-hairline">
        <div className="mx-auto grid max-w-5xl gap-8 px-4 py-16 sm:gap-10 sm:px-6 sm:py-24 md:grid-cols-[2fr_1fr] lg:px-8 xl:max-w-6xl">
          <Reveal>
            <div>
              <p className="font-mono text-sm uppercase tracking-[0.25em] text-gold">
                Sobre mí
              </p>
              <blockquote className="mt-4 font-[family-name:var(--font-display)] text-2xl italic leading-snug sm:text-4xl lg:text-5xl">
                Optimizar la lógica en la gestión de datos y diseñar interfaces de usuario eficientes y escalables..
              </blockquote>
              <p className="mt-6 max-w-lg text-sm text-ink-soft sm:text-base">
                Soy un desarrollador en formación enfocado en la arquitectura de bases de datos
                y el desarrollo de interfaces de usuario.
              </p>
              <p className="mt-6 max-w-lg text-sm text-ink-soft sm:text-base">
                Busco incorporarme a proyectos desafiantes
                donde pueda aplicar mis conocimientos técnicos y adquirir experiencia práctica,
                aportando valor tanto en la estructuración de modelos relacionales/NoSQL
                como en la implementación de frontends interactivos y escalables.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="font-mono text-sm uppercase tracking-widest text-ink-soft">
              <p className="mb-2 text-gold">Herramientas de Desarrollo</p>
              <ul className="space-y-1">
                <li>Next.js / React</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Supabase</li>
                <li>Figma</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <footer id="contacto" className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 xl:max-w-6xl">
        <Reveal>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-5xl lg:text-6xl">
            Hablemos.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-4 text-base sm:text-lg">
            <p className="mb-2 break-words">
              <span className="font-medium">Correo: </span>
              <a href="mailto:StardustB28@hotmail.com" className="inline-block border-b border-ink hover:text-signal hover:border-signal">
                StardustB28@hotmail.com
              </a>
            </p>

            <p>
              <span className="font-medium">WhatsApp: </span>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="inline-block border-b border-ink hover:text-signal hover:border-signal">
                +51 933 233 888
              </a>
            </p>
          </div>
        </Reveal>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-6 font-mono text-sm uppercase tracking-widest text-ink-soft sm:mt-16">
          <span>© 2026 Conde Palomino, Brayan Aldair</span>
          <div className="flex gap-6">
            <a href="https://github.com/stardustb28-2003" target="_blank" rel="noopener noreferrer" className="hover:text-signal">GitHub</a>
            <a href="https://www.linkedin.com/in/brayan-aldair-conde-palomino-292a5b399/" target="_blank" rel="noopener noreferrer" className="hover:text-signal">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  );
}