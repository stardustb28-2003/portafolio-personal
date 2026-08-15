"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, Check, AlertCircle } from "lucide-react";
import { profile } from "../Lib/data";

// 1. Crea una cuenta gratis en https://formspree.io
// 2. Crea un formulario y copia su endpoint (algo como https://formspree.io/f/xxxxxxx)
// 3. Reemplaza el valor de abajo con ese endpoint.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/TU_ID_AQUI";

type Status = "idle" | "sending" | "success" | "error";

export default function Contacto() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (FORMSPREE_ENDPOINT.includes("TU_ID_AQUI")) {
      setStatus("error");
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);
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
      }
    } catch {
      setStatus("error");
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
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-5xl lg:text-6xl">
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
    className="inline-block border-b border-ink transition-colors hover:border-signal hover:text-signal"
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
              className="inline-block border-b border-ink transition-colors hover:border-signal hover:text-signal"
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
                className="mt-1 w-full border-b border-hairline bg-transparent py-2 text-ink outline-none transition-colors focus:border-signal"
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
                className="mt-1 w-full border-b border-hairline bg-transparent py-2 text-ink outline-none transition-colors focus:border-signal"
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
              className="mt-1 w-full resize-none border-b border-hairline bg-transparent py-2 text-ink outline-none transition-colors focus:border-signal"
              placeholder="Cuéntame sobre tu proyecto..."
            />
          </div>

          <div className="flex items-center gap-4 pt-2">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3 font-mono text-xs uppercase tracking-widest text-paper transition-opacity disabled:opacity-60"
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
              <span className="inline-flex items-center gap-1 text-sm text-signal">
                <Check size={16} /> Mensaje enviado
              </span>
            )}
            {status === "error" && (
              <span className="inline-flex items-center gap-1 text-sm text-gold">
                <AlertCircle size={16} /> No se pudo enviar. Escríbeme por correo o WhatsApp.
              </span>
            )}
          </div>
        </motion.form>
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-6 font-mono text-sm uppercase tracking-widest text-ink-soft sm:mt-16">
        <span>© 2026 {profile.name}</span>
        <div className="flex gap-6">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-signal">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-signal">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}