import { motion } from "framer-motion";
import { Award, HeartHandshake, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/lib/utils";
import { getSiteConfig } from "@/data";

const PILARES = [
  { icone: Microscope, titulo: "Tecnologia de ponta", texto: "Equipamentos digitais para diagnósticos precisos e tratamentos minimamente invasivos." },
  { icone: HeartHandshake, titulo: "Acolhimento genuíno", texto: "Cada paciente é acompanhado de perto, com escuta ativa em todas as etapas do tratamento." },
  { icone: Award, titulo: "Excelência clínica", texto: "Anos de experiência dedicados à odontologia estética e restauradora de alto padrão." },
];

export function Sobre() {
  const site = getSiteConfig();
  const waUrl = buildWhatsAppUrl(site.whatsapp, "Olá! Quero saber mais sobre a clínica.");

  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="container grid items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-xl2 shadow-premium">
            <img
              src="/images/sobre/recepcao-clinica.jpg"
              alt="Recepção acolhedora da clínica Odonto Siqueira em Petrolina"
              className="aspect-[3/4] w-full object-cover sm:aspect-[4/3]"
              loading="lazy"
            />
          </div>
          <div className="gold-line absolute -left-2 -top-6 hidden md:block" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-light absolute -bottom-6 -right-4 flex items-center gap-3 rounded-2xl p-3 shadow-premium sm:-right-8"
          >
            <img
              src="/images/sobre/dr-luiz-carlos-siqueira-perfil.jpg"
              alt={site.responsavel}
              className="h-16 w-14 rounded-xl object-cover"
            />
            <div className="pr-2">
              <p className="font-display text-sm font-semibold text-brand-deep">{site.responsavel}</p>
              <p className="text-xs text-brand-deep/60">{site.cro}</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="eyebrow">
            <span className="gold-line" /> Sobre a clínica
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-brand-deep md:text-4xl">
            Uma nova referência em odontologia premium no Sertão
          </h2>
          <p className="mt-5 text-brand-deep/70 leading-relaxed">
            A <strong>{site.nome}</strong> nasceu da visão do <strong>{site.responsavel}</strong> ({site.cro}):
            unir tecnologia de ponta, ambiente sofisticado e um atendimento verdadeiramente humano.
            Em Petrolina/PE — e recebendo pacientes de {site.atendeTambem.join(" e ")} — a clínica é hoje
            sinônimo de confiança para quem busca transformar o sorriso com segurança.
          </p>

          <div className="mt-10 space-y-6">
            {PILARES.map((p, i) => (
              <motion.div
                key={p.titulo}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                  <p.icone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-brand-deep">{p.titulo}</h3>
                  <p className="mt-1 text-sm text-brand-deep/60">{p.texto}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <Button asChild className="mt-10">
            <a href={waUrl} target="_blank" rel="noopener noreferrer">Fale com a nossa equipe</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
