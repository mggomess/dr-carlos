import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { getSiteConfig } from "@/data";

export function Mapa() {
  const site = getSiteConfig();
  return (
    <section aria-labelledby="mapa-titulo" className="bg-brand-mist py-16">
      <div className="container">
        <div className="mb-8 flex items-center gap-2">
          <MapPin className="h-5 w-5 text-brand-blue" />
          <h2 id="mapa-titulo" className="font-display text-xl font-semibold text-brand-deep">
            Como chegar
          </h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl shadow-glass"
        >
          <iframe
            title={`Mapa de localização da ${site.nome}`}
            src={site.mapaEmbedUrl}
            width="100%"
            height="420"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
