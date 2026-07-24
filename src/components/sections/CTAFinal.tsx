import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/lib/utils";
import { getSiteConfig } from "@/data";

export function CTAFinal() {
  const site = getSiteConfig();
  const waUrl = buildWhatsAppUrl(
    site.whatsapp,
    "Olá! Quero agendar minha avaliação na Odonto Siqueira agora."
  );

  return (
    <section className="relative overflow-hidden bg-brand-deep py-24 text-center">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-brand-blue/20 blur-[120px]" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container relative"
      >
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold text-white md:text-5xl">
          Dê o primeiro passo para o sorriso que você sempre quis
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-white/70">
          Fale agora com nossa equipe pelo WhatsApp e agende sua avaliação com o {site.responsavel} ({site.cro}).
        </p>
        <Button asChild variant="whatsapp" size="lg" className="mt-9">
          <a href={waUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-5 w-5" />
            Agendar minha avaliação
          </a>
        </Button>
      </motion.div>
    </section>
  );
}
