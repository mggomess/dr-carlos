import { useState } from "react";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import { getVideos } from "@/data";

export function Videos() {
  const videos = getVideos();
  const [ativo, setAtivo] = useState<string | null>(null);

  return (
    <section id="videos" className="section-padding bg-brand-deep">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="gold-line" /> Vídeos
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-4xl">
            Conheça a clínica por dentro
          </h2>
        </div>

        {videos.length === 0 ? (
          <div className="mx-auto mt-14 max-w-md rounded-2xl border border-dashed border-white/20 bg-white/5 p-10 text-center">
            <PlayCircle className="mx-auto h-10 w-10 text-white/30" />
            <p className="mt-3 text-sm text-white/50">Vídeos em breve.</p>
          </div>
        ) : (
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {videos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-video overflow-hidden rounded-2xl shadow-premium"
            >
              {ativo === video.id ? (
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                  title={video.titulo}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button
                  className="relative h-full w-full"
                  onClick={() => setAtivo(video.id)}
                  aria-label={`Reproduzir vídeo: ${video.titulo}`}
                >
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt={video.titulo}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-deep/40 transition-colors group-hover:bg-brand-deep/50" />
                  <PlayCircle className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-white drop-shadow-lg" />
                  <p className="absolute bottom-4 left-4 right-4 text-left font-display font-semibold text-white">
                    {video.titulo}
                  </p>
                </button>
              )}
            </motion.div>
          ))}
        </div>
        )}
      </div>
    </section>
  );
}
