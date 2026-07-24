import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Sparkles, Clock3, Gem, Users } from "lucide-react";

const ITENS = [
  { icone: Cpu, titulo: "Tecnologia digital", texto: "Planejamento 3D, escaneamento intraoral e imagem de alta precisão." },
  { icone: ShieldCheck, titulo: "Biossegurança total", texto: "Protocolos rigorosos de esterilização em todas as etapas." },
  { icone: Gem, titulo: "Odontologia estética", texto: "Especialistas em facetas, lentes e harmonização do sorriso." },
  { icone: Clock3, titulo: "Agilidade no atendimento", texto: "Agendamento facilitado e pontualidade nas consultas." },
  { icone: Users, titulo: "Equipe multidisciplinar", texto: "Profissionais qualificados para cada etapa do seu tratamento." },
  { icone: Sparkles, titulo: "Experiência premium", texto: "Ambiente climatizado, elegante e pensado para o seu conforto." },
];

export function Diferenciais() {
  return (
    <section id="diferenciais" className="section-padding bg-brand-mist">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="gold-line" /> Diferenciais
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-brand-deep md:text-4xl">
            Por que escolher a Odonto Siqueira
          </h2>
          <p className="mt-4 text-brand-deep/60">
            Cada detalhe da experiência foi desenhado para transmitir confiança, tecnologia e cuidado.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ITENS.map((item, i) => (
            <motion.div
              key={item.titulo}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group rounded-2xl border border-brand-deep/5 bg-white p-7 shadow-glass transition-all duration-300 hover:-translate-y-1.5 hover:shadow-premium"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-deep text-white transition-colors duration-300 group-hover:bg-brand-blue">
                <item.icone className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display font-semibold text-brand-deep">{item.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-deep/60">{item.texto}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
