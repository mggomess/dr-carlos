import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { MessageCircle, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/lib/utils";
import { getSiteConfig } from "@/data";

const STATS = [
  { valor: 5000, sufixo: "+", label: "Pacientes atendidos" },
  { valor: 15, sufixo: " anos", label: "De experiência" },
  { valor: 98, sufixo: "%", label: "De satisfação" },
];

function useCountUp(target: number, start: boolean, duration = 1800) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf: number;
    const t0 = performance.now();
    const tick = (t: number) => {
      const progress = Math.min((t - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return value;
}

function StatCounter({ valor, sufixo, label }: { valor: number; sufixo: string; label: string }) {
  const [started, setStarted] = useState(false);
  const count = useCountUp(valor, started);
  return (
    <motion.div
      onViewportEnter={() => setStarted(true)}
      viewport={{ once: true }}
      className="text-center"
    >
      <p className="font-display text-3xl font-bold text-white md:text-4xl">
        {count.toLocaleString("pt-BR")}
        {sufixo}
      </p>
      <p className="mt-1 text-xs uppercase tracking-wider text-white/60 md:text-sm">{label}</p>
    </motion.div>
  );
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const site = getSiteConfig();
  const waUrl = buildWhatsAppUrl(
    site.whatsapp,
    "Olá! Vim pelo site e quero agendar minha avaliação odontológica."
  );

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={(e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-brand-deep pt-24"
    >
      {/* Imagem de fundo com parallax leve */}
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src="/images/hero/hero-bg.jpg"
          alt="Interior premium da clínica Odonto Siqueira, com equipamentos odontológicos modernos"
          className="h-[120%] w-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/70 via-brand-deep/85 to-brand-deep" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-deep via-brand-deep/40 to-transparent" />
      </motion.div>

      {/* Glow dourado ambiente */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-brand-gold/10 blur-[120px]" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-brand-blue/20 blur-[100px]" />

      <motion.div style={{ opacity }} className="container relative z-10 grid items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Coluna de texto */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="eyebrow mb-6 glass w-fit rounded-full px-4 py-2 text-white"
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            {site.responsavel} · {site.cro}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-xl font-display text-4xl font-bold leading-[1.1] text-white md:text-6xl"
          >
            Seu sorriso é a nossa <span className="text-brand-blue">obra-prima</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-lg text-lg text-white/70"
          >
            Odontologia premium em Petrolina/PE — tecnologia de ponta, acolhimento genuíno
            e resultados que transformam. Atendemos também Tabira/PE e Água Branca/PB.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button asChild variant="whatsapp" size="lg">
              <a href={waUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Agendar avaliação pelo WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#servicos">Ver serviços</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 flex items-center gap-2 text-sm text-white/60"
          >
            <div className="flex" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-brand-gold text-brand-gold" />
              ))}
            </div>
            Avaliação 5.0 de pacientes reais no Google
          </motion.div>

          {/* Estatísticas animadas */}
          <div className="mt-14 grid max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-8">
            {STATS.map((s) => (
              <StatCounter key={s.label} {...s} />
            ))}
          </div>
        </div>

        {/* Cartão do doutor */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative mx-auto hidden max-w-sm lg:block"
        >
          <div className="glass animate-float overflow-hidden rounded-xl2 p-3 shadow-premium">
            <img
              src="/images/hero/dr-luiz-carlos-siqueira.jpg"
              alt={`${site.responsavel}, cirurgião-dentista responsável pela Odonto Siqueira`}
              className="aspect-[4/5] w-full rounded-xl object-cover"
            />
            <div className="p-4">
              <p className="font-display font-semibold text-white">{site.responsavel}</p>
              <p className="text-sm text-white/60">{site.cro}</p>
            </div>
          </div>
          <div className="glass absolute -left-8 bottom-10 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-premium">
            <ShieldCheck className="h-6 w-6 text-brand-gold" />
            <div>
              <p className="text-sm font-semibold text-white">Biossegurança</p>
              <p className="text-xs text-white/60">Protocolos internacionais</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
