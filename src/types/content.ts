/**
 * Contratos de conteúdo do site.
 * Hoje o conteúdo é servido por arquivos JSON estáticos em `src/data`,
 * mas os tipos abaixo foram desenhados para vir, no futuro, de uma API
 * (painel administrativo) sem exigir mudanças nos componentes —
 * basta trocar a camada de fetch em `src/data/index.ts`.
 */

export interface SiteConfig {
  nome: string;
  responsavel: string;
  cro: string;
  instagram: string;
  whatsapp: string; // formato E.164, ex: +5587996753346
  endereco: {
    logradouro: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
  };
  atendeTambem: string[];
  mapaEmbedUrl: string;
  horario: { dias: string; horas: string }[];
}

export interface Banner {
  id: string;
  imagemUrl: string;
  titulo: string;
  subtitulo: string;
  ctaLabel: string;
  ativo: boolean;
}

export interface Servico {
  id: string;
  nome: string;
  descricaoCurta: string;
  descricaoLonga: string;
  icone: string; // nome do ícone lucide-react
  imagemUrl: string;
  destaque?: boolean;
}

export interface Depoimento {
  id: string;
  nomePaciente: string;
  texto: string;
  nota: number; // 1-5
  procedimento: string;
  fotoUrl?: string;
}

export interface FaqItem {
  id: string;
  pergunta: string;
  resposta: string;
}

export interface GaleriaItem {
  id: string;
  imagemUrl: string;
  categoria: string;
  legenda: string;
}

export interface AntesDepoisItem {
  id: string;
  procedimento: string;
  antesUrl: string;
  depoisUrl: string;
}

export interface VideoItem {
  id: string;
  titulo: string;
  youtubeId: string;
}

export interface GoogleReview {
  id: string;
  autor: string;
  nota: number;
  texto: string;
  data: string;
  fotoUrl?: string;
}
