import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { buildWhatsAppUrl } from "@/lib/utils";
import { getSiteConfig } from "@/data";

/**
 * Botão flutuante do WhatsApp, sempre visível.
 * Mantém alto contraste e alvo de toque >= 56px para acessibilidade mobile.
 */
export function WhatsAppFloat() {
  const site = getSiteConfig();
  const url = buildWhatsAppUrl(
    site.whatsapp,
    "Olá! Vim pelo site e gostaria de agendar uma avaliação na Odonto Siqueira."
  );

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar consulta pelo WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.5)] md:h-16 md:w-16"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/50" aria-hidden />
      <MessageCircle className="relative h-7 w-7" fill="white" strokeWidth={0} />
    </motion.a>
  );
}
