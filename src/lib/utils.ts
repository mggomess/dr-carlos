import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Combina classes Tailwind com segurança, resolvendo conflitos. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Formata o WhatsApp com uma mensagem pré-definida e retorna a URL de envio (wa.me). */
export function buildWhatsAppUrl(phoneE164: string, message: string) {
  const digits = phoneE164.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
