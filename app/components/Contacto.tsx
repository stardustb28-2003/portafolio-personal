"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, Check, AlertCircle } from "lucide-react";
import { profile } from "../Lib/data";

// Endpoint del formulario "Contacto Portafolio" en Formspree (envía a stardustb28@hotmail.com).
// Se puede sobrescribir con la variable NEXT_PUBLIC_FORMSPREE_ENDPOINT.
// Si el envío falla, se abre el correo del visitante con el mensaje listo.
const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/xdekdpvk";

type Status = "idle" | "sending" | "success" | "error";

function openMailFallback(data: FormData) {
  const name = String(data.get("name") ?? "");
  const email = String(data.get("email") ?? "");
  const message = String(data.get("message") ?? "");
  const subject = encodeURIComponent(`Contacto desde el portafolio - ${name}`);
  const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
  window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
}

export default function Contacto() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    if (!FORMSPREE_ENDPOINT) {
      openMailFallback(data);
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        openMailFallback(data);
      }
    } catch {
      setStatus("error");
      openMailFallback(data);
    }
  }

  return (
    <footer id="contacto" className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 xl:max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-[family-name:var(--font-display)] font-semibold tracking-[-0.05em] text-4xl sm:text-5xl lg:text-6xl">
          Contacto.
        </h2>
      </motion.div>

      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base sm:text-lg"
        >
<p className="mb-2 break-words">
  <span className="font-medium">Correo: </span>
  <a
    href={`mailto:${profile.email}`}
    className="inline-block border-b border-ink transition-colors hover:border-ink-soft hover:text-ink-soft"
  >
    {profile.email}
  </a>
</p>
          <p>
            <span className="font-medium">WhatsApp: </span>
              
            <a
              href={profile.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-b border-ink transition-colors hover:border-ink-soft hover:text-ink-soft"
            >
              {profile.whatsapp}
            </a>
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input type="hidden" name="_subject" value="Nuevo mensaje desde tu portafolio" />
          {/* Trampa antispam de Formspree: los bots la llenan, las personas no la ven */}
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="font-mono text-xs uppercase tracking-widest text-ink-soft">
                Nombre
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-2 w-full rounded-md border border-hairline bg-surface px-3 py-2.5 text-sm text-ink outline-none transition-shadow placeholder:text-ink-soft/60 focus:border-ink/40 focus:shadow-[0_0_0_3px_#ffffff14]"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="font-mono text-xs uppercase tracking-widest text-ink-soft">
                Correo
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-md border border-hairline bg-surface px-3 py-2.5 text-sm text-ink outline-none transition-shadow placeholder:text-ink-soft/60 focus:border-ink/40 focus:shadow-[0_0_0_3px_#ffffff14]"
                placeholder="tu@correo.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-ink-soft">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="mt-2 w-full resize-none rounded-md border border-hairline bg-surface px-3 py-2.5 text-sm text-ink outline-none transition-shadow placeholder:text-ink-soft/60 focus:border-ink/40 focus:shadow-[0_0_0_3px_#ffffff14]"
              placeholder="Cuéntame sobre tu proyecto..."
            />
          </div>

          <div className="flex items-center gap-4 pt-2">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={status === "sending"}
              className="inline-flex h-10 items-center gap-2 rounded-md bg-ink px-5 text-sm font-medium text-paper transition-colors hover:bg-ink/85 disabled:opacity-60"
            >
              {status === "sending" ? (
                <>
                  <Loader2 size={14} className="animate-spin" /> Enviando
                </>
              ) : (
                <>
                  <Send size={14} /> Enviar mensaje
                </>
              )}
            </motion.button>

            {status === "success" && (
              <span className="inline-flex items-center gap-1 text-sm text-accent">
                <Check size={16} /> Mensaje enviado
              </span>
            )}
            {status === "error" && (
              <span className="inline-flex items-center gap-1 text-sm text-ink-soft">
                <AlertCircle size={16} /> No se pudo enviar. Abrimos tu correo o escríbeme por WhatsApp.
              </span>
            )}
          </div>
        </motion.form>
      </div>

      <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-6 font-mono text-xs uppercase tracking-widest text-ink-soft sm:mt-24">
        <span>© 2026 {profile.name}</span>
        <div className="flex gap-6">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}