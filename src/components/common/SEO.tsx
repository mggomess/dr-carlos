import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
}

/**
 * Ajuste dinâmico de título/descrição para futuras rotas internas
 * (ex.: páginas de serviço dedicadas). As tags globais (JSON-LD,
 * Open Graph, canonical) já vivem em `index.html` para SSR/crawler-friendly.
 */
export function SEO({ title, description }: SEOProps) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", description);
    }
  }, [title, description]);

  return null;
}
