import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getGaleria } from "@/data";

export function Galeria() {
  const itens = getGaleria();
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true, dragFree: true });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="galeria" className="section-padding bg-brand-mist">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow">
              <span className="gold-line" /> Galeria
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-brand-deep md:text-4xl">
              Um espaço pensado para o seu bem-estar
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canPrev}
              aria-label="Imagem anterior"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-deep/10 bg-white text-brand-deep transition hover:bg-brand-blue hover:text-white disabled:opacity-30"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canNext}
              aria-label="Próxima imagem"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-deep/10 bg-white text-brand-deep transition hover:bg-brand-blue hover:text-white disabled:opacity-30"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-10 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5">
            {itens.map((item, i) => (
              <motion.figure
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.08 }}
                className="relative min-w-[80%] flex-[0_0_80%] overflow-hidden rounded-2xl shadow-glass sm:min-w-[45%] sm:flex-[0_0_45%] lg:min-w-[30%] lg:flex-[0_0_30%]"
              >
                <img
                  src={item.imagemUrl}
                  alt={item.legenda}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-deep/90 to-transparent p-4 text-sm text-white">
                  <span className="text-xs uppercase tracking-wider text-brand-gold">{item.categoria}</span>
                  <p className="font-medium">{item.legenda}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
