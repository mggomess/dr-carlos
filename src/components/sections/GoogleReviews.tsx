import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { getGoogleReviews } from "@/data";

/**
 * Seção "preparada para API": os dados hoje vêm de `googleReviews.json`,
 * mas o formato já espelha o retorno típico da Google Places API
 * (autor, nota, texto, data). Quando a integração for feita, basta
 * substituir `getGoogleReviews()` por uma chamada à API mantendo o
 * mesmo tipo `GoogleReview[]`.
 */
export function GoogleReviews() {
  const reviews = getGoogleReviews();
  const media = (reviews.reduce((acc, r) => acc + r.nota, 0) / reviews.length).toFixed(1);

  return (
    <section id="google-reviews" className="section-padding bg-white">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="gold-line" /> Avaliações no Google
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-brand-deep md:text-4xl">
            O que dizem no Google
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="font-display text-2xl font-bold text-brand-deep">{media}</span>
            <div className="flex" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-brand-gold text-brand-gold" />
              ))}
            </div>
            <span className="text-sm text-brand-deep/50">({reviews.length} avaliações)</span>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-brand-deep/5 bg-brand-mist p-6 shadow-glass"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10 font-display font-semibold text-brand-blue">
                  {r.autor.charAt(0)}
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-brand-deep">{r.autor}</p>
                  <div className="flex" aria-hidden>
                    {Array.from({ length: r.nota }).map((_, idx) => (
                      <Star key={idx} className="h-3.5 w-3.5 fill-brand-gold text-brand-gold" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-brand-deep/70">{r.texto}</p>
              <p className="mt-3 text-xs text-brand-deep/40">
                {new Date(r.data).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
