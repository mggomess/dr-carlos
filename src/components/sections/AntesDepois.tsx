import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { MoveHorizontal } from "lucide-react";
import { getAntesDepois } from "@/data";
import type { AntesDepoisItem } from "@/types/content";

function Comparador({ item }: { item: AntesDepoisItem }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50); // porcentagem

  const updatePos = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  };

  return (
    <div className="rounded-2xl bg-white p-4 shadow-glass">
      <div
        ref={containerRef}
        className="relative aspect-[4/3] w-full cursor-ew-resize touch-none select-none overflow-hidden rounded-xl"
        onMouseMove={(e) => e.buttons === 1 && updatePos(e.clientX)}
        onTouchMove={(e) => updatePos(e.touches[0].clientX)}
        onClick={(e) => updatePos(e.clientX)}
        role="slider"
        aria-label={`Comparador de antes e depois — ${item.procedimento}`}
        aria-valuenow={Math.round(pos)}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 5));
          if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 5));
        }}
      >
        <img src={item.depoisUrl} alt={`Depois — ${item.procedimento}`} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <img
            src={item.antesUrl}
            alt={`Antes — ${item.procedimento}`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-y-0 w-0.5 bg-white shadow" style={{ left: `${pos}%` }}>
          <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand-deep shadow-premium">
            <MoveHorizontal className="h-5 w-5" />
          </div>
        </div>

        <span className="absolute left-3 top-3 rounded-full bg-brand-deep/70 px-3 py-1 text-xs font-medium text-white backdrop-blur">Antes</span>
        <span className="absolute right-3 top-3 rounded-full bg-brand-blue/80 px-3 py-1 text-xs font-medium text-white backdrop-blur">Depois</span>
      </div>
      <p className="mt-4 text-center font-display font-semibold text-brand-deep">{item.procedimento}</p>
    </div>
  );
}

export function AntesDepois() {
  const itens = getAntesDepois();
  return (
    <section id="antes-depois" className="section-padding bg-white">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="gold-line" /> Transformações reais
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-brand-deep md:text-4xl">
            Antes e depois
          </h2>
          <p className="mt-4 text-brand-deep/60">Arraste o controle para comparar os resultados.</p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {itens.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Comparador item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
