import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { getDepoimentos } from "@/data";

export function Depoimentos() {
  const depoimentos = getDepoimentos();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5500, stopOnInteraction: true }),
  ]);
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="depoimentos" className="section-padding bg-brand-mist">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="gold-line" /> Depoimentos
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-brand-deep md:text-4xl">
            Histórias reais de transformação
          </h2>
        </div>

        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {depoimentos.map((dep) => (
                <div key={dep.id} className="min-w-0 flex-[0_0_100%] px-2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-2xl bg-white p-8 text-center shadow-glass md:p-12"
                  >
                    <Quote className="mx-auto h-8 w-8 text-brand-blue/30" />
                    <div className="mt-4 flex justify-center gap-1" aria-hidden>
                      {Array.from({ length: dep.nota }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-brand-gold text-brand-gold" />
                      ))}
                    </div>
                    <p className="mt-4 text-lg italic leading-relaxed text-brand-deep/80">"{dep.texto}"</p>
                    <p className="mt-6 font-display font-semibold text-brand-deep">{dep.nomePaciente}</p>
                    <p className="text-sm text-brand-blue">{dep.procedimento}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => emblaApi?.scrollPrev()}
            aria-label="Depoimento anterior"
            className="absolute left-0 top-1/2 hidden -translate-x-6 -translate-y-1/2 items-center justify-center rounded-full border border-brand-deep/10 bg-white p-3 shadow-glass hover:bg-brand-blue hover:text-white md:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            aria-label="Próximo depoimento"
            className="absolute right-0 top-1/2 hidden translate-x-6 -translate-y-1/2 items-center justify-center rounded-full border border-brand-deep/10 bg-white p-3 shadow-glass hover:bg-brand-blue hover:text-white md:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="mt-8 flex justify-center gap-2">
            {depoimentos.map((dep, i) => (
              <button
                key={dep.id}
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Ir para depoimento ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === selected ? "w-6 bg-brand-blue" : "w-2 bg-brand-deep/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
