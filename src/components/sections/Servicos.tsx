import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { MessageCircle, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/lib/utils";
import { getServicos, getSiteConfig } from "@/data";

export function Servicos() {
  const servicos = getServicos();
  const site = getSiteConfig();

  return (
    <section id="servicos" className="section-padding bg-white">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="gold-line" /> Nossos serviços
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-brand-deep md:text-4xl">
            Tratamentos completos para o seu sorriso
          </h2>
          <p className="mt-4 text-brand-deep/60">
            Da prevenção à odontologia estética avançada, tudo em um único lugar.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicos.map((servico, i) => {
            const Icon = (Icons[servico.icone as keyof typeof Icons] as LucideIcon) ?? Icons.Stethoscope;
            const waUrl = buildWhatsAppUrl(
              site.whatsapp,
              `Olá! Tenho interesse no serviço de ${servico.nome} e gostaria de agendar uma avaliação.`
            );
            return (
              <motion.div
                key={servico.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-brand-deep/5 shadow-glass transition-all duration-300 hover:-translate-y-1.5 hover:shadow-premium"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={servico.imagemUrl}
                    alt={servico.nome}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/80 to-transparent" />
                  <div className="absolute bottom-3 left-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/15 text-white backdrop-blur">
                    <Icon className="h-5 w-5" />
                  </div>
                  {servico.destaque && (
                    <span className="absolute right-3 top-3 rounded-full bg-brand-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-brand-deep">
                      Destaque
                    </span>
                  )}
                </div>
                <div className="bg-white p-6">
                  <h3 className="font-display font-semibold text-brand-deep">{servico.nome}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-deep/60">{servico.descricaoCurta}</p>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:underline"
                  >
                    <MessageCircle className="h-4 w-4" /> Agendar este procedimento
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <Button asChild size="lg">
            <a
              href={buildWhatsAppUrl(site.whatsapp, "Olá! Quero saber mais sobre os tratamentos disponíveis.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar com a equipe sobre meu caso
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
