import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl, cn } from "@/lib/utils";
import { getSiteConfig } from "@/data";

const LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#servicos", label: "Serviços" },
  { href: "#galeria", label: "Galeria" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const site = getSiteConfig();
  const waUrl = buildWhatsAppUrl(site.whatsapp, "Olá! Gostaria de agendar uma avaliação.");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        scrolled ? "glass-light shadow-glass py-3" : "bg-transparent py-5"
      )}
    >
      <nav className="container flex items-center justify-between" aria-label="Navegação principal">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className={cn(scrolled ? "text-brand-deep" : "text-white")}>
            Odonto <span className="text-brand-blue">Siqueira</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand-blue",
                  scrolled ? "text-brand-deep/80" : "text-white/90"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button asChild variant="whatsapp" size="sm">
            <a href={waUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              Agendar agora
            </a>
          </Button>
        </div>

        <button
          className={cn("lg:hidden", scrolled ? "text-brand-deep" : "text-white")}
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass-light overflow-hidden lg:hidden"
          >
            <ul className="container flex flex-col gap-1 py-4">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-brand-deep font-medium hover:bg-brand-blue/5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <Button asChild variant="whatsapp" className="w-full">
                  <a href={waUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" />
                    Agendar pelo WhatsApp
                  </a>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
