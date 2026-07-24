/**
 * Camada de acesso a dados.
 *
 * Hoje todo o conteúdo do site é lido destes arquivos JSON estáticos,
 * versionados junto ao código (fácil de editar e revisar).
 *
 * Para o "painel futuro" mencionado no briefing, esta é a ÚNICA camada
 * que precisa mudar: basta trocar cada `import ... from "./x.json"` por
 * uma chamada `fetch("/api/x")` (ou React Query) que retorne o mesmo
 * formato tipado em `src/types/content.ts`. Nenhum componente de seção
 * precisa ser alterado, pois todos consomem os dados através destas
 * funções `getX()`.
 */
import type {
  SiteConfig,
  Servico,
  Depoimento,
  FaqItem,
  GaleriaItem,
  AntesDepoisItem,
  VideoItem,
  GoogleReview,
  Banner,
} from "@/types/content";

import siteJson from "./site.json";
import servicosJson from "./servicos.json";
import depoimentosJson from "./depoimentos.json";
import faqJson from "./faq.json";
import galeriaJson from "./galeria.json";
import antesDepoisJson from "./antesDepois.json";
import videosJson from "./videos.json";
import googleReviewsJson from "./googleReviews.json";
import bannersJson from "./banners.json";

export const getSiteConfig = (): SiteConfig => siteJson as SiteConfig;
export const getServicos = (): Servico[] => servicosJson as Servico[];
export const getDepoimentos = (): Depoimento[] => depoimentosJson as Depoimento[];
export const getFaq = (): FaqItem[] => faqJson as FaqItem[];
export const getGaleria = (): GaleriaItem[] => galeriaJson as GaleriaItem[];
export const getAntesDepois = (): AntesDepoisItem[] => antesDepoisJson as AntesDepoisItem[];
export const getVideos = (): VideoItem[] => videosJson as VideoItem[];
export const getGoogleReviews = (): GoogleReview[] => googleReviewsJson as GoogleReview[];
export const getBanners = (): Banner[] => bannersJson as Banner[];
