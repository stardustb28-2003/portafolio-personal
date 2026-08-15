"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { profile } from "../Lib/data";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={profile.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-signal text-paper shadow-lg shadow-signal/30 sm:bottom-8 sm:right-8"
    >
      <MessageCircle size={22} />
    </motion.a>
  );
}
