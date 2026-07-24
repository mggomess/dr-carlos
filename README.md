# Odonto Siqueira — Landing Page Premium

Landing page de conversão via WhatsApp para a clínica **Odonto Siqueira**
(Dr. Luiz Carlos Siqueira · CRO 17251-PE), em Petrolina/PE.

## Stack

- **React 18 + TypeScript + Vite**
- **Tailwind CSS** (tokens de marca em `tailwind.config.ts`)
- **Framer Motion** — scroll reveal, parallax leve, microinterações
- **Lucide React** — ícones
- **React Hook Form + Zod** — formulário de contato validado
- **Embla Carousel** (+ Autoplay) — galeria e depoimentos
- Componentes de UI no padrão **shadcn/ui** (Radix + CVA), já incluídos em `src/components/ui`

## Como rodar

```bash
npm install
npm run dev       # ambiente de desenvolvimento
npm run build     # build de produção (dist/)
npm run preview   # pré-visualizar o build
```

> Este ambiente sandbox não tem acesso à internet para rodar `npm install`.
> Rode os comandos acima na sua máquina/CI.

## Estrutura

```
src/
  components/
    layout/      Navbar, Footer
    sections/    Hero, Sobre, Diferenciais, Servicos, Galeria,
                 AntesDepois, Videos, Depoimentos, GoogleReviews,
                 FAQ, CTAFinal, Contato, Mapa
    common/      SEO, WhatsAppFloat, BackToTop
    ui/          Primitivas (Button, Card, Accordion, Input...)
  data/          JSON de conteúdo + camada `getX()` (ver abaixo)
  types/         Contratos de conteúdo (content.ts)
  lib/           utils (cn, buildWhatsAppUrl)
```

## Conteúdo "pronto para painel" (API-ready)

Todo o conteúdo dinâmico (banners, serviços, depoimentos, galeria, FAQ,
avaliações do Google, dados da clínica) vem de arquivos em `src/data/*.json`,
acessados **somente** através das funções tipadas em `src/data/index.ts`
(`getServicos()`, `getDepoimentos()`, `getFaq()` etc.), nunca hardcoded
dentro dos componentes de seção.

Quando o painel administrativo existir, basta trocar o corpo dessas
funções por chamadas `fetch("/api/...")` retornando o mesmo formato —
**nenhum componente visual precisa ser alterado**. Os tipos ficam
centralizados em `src/types/content.ts`.

## SEO

- Meta tags completas, Open Graph e Twitter Card em `index.html`
- JSON-LD `Dentist` (subtipo de `LocalBusiness`) com endereço, WhatsApp,
  responsável técnico e áreas atendidas
- `public/robots.txt` e `public/sitemap.xml`
- `rel="canonical"` configurado
- HTML semântico (`header`, `main`, `section`, `footer`) e atributos
  ARIA em controles interativos (carrosséis, accordion, comparador
  antes/depois, menu mobile)

## Conversão

- CTA "Agendar pelo WhatsApp" no header, hero, cada card de serviço,
  CTA final e formulário de contato
- Formulário estrutura a mensagem e abre o WhatsApp já preenchido
- Prova social: estatísticas animadas, depoimentos, avaliações do Google,
  comparador de antes/depois
- Botão flutuante do WhatsApp e botão "voltar ao topo" sempre acessíveis

## Imagens

O projeto agora usa **fotos reais da clínica** enviadas por você, já
otimizadas (redimensionadas e comprimidas para performance) e nos
caminhos corretos. Onde ainda não havia foto real disponível, o
placeholder genérico de marca foi mantido — basta substituir o arquivo
pelo nome exato indicado, sem tocar em código.

**Fotos reais já aplicadas:**

| Caminho | Onde aparece | Origem |
|---|---|---|
| `public/images/hero/hero-bg.jpg` | Fundo do Hero (tela cheia) | Foto da sala de equipamentos/cadeira |
| `public/images/hero/dr-luiz-carlos-siqueira.jpg` | Card do doutor no Hero | Retrato de estúdio (close) |
| `public/images/sobre/recepcao-clinica.jpg` | Seção "Sobre a clínica" | Foto da recepção |
| `public/images/sobre/dr-luiz-carlos-siqueira-perfil.jpg` | Card flutuante sobre a foto da recepção | Retrato de estúdio (corpo inteiro) |
| `public/images/galeria/fachada-clinica.jpg` | Galeria — Clínica | Foto da fachada/entrada |
| `public/images/galeria/equipamentos-tecnologia.jpg` | Galeria — Equipamentos | Foto da sala de equipamentos |
| `public/images/galeria/recepcao-acolhedora.jpg` | Galeria — Clínica | Foto da recepção |
| `public/images/antes-depois/ortodontia-antes.jpg` / `-depois.jpg` | Comparador — "Alinhamento Ortodôntico" | Fotos reais de paciente (antes/depois enviados) |
| `public/images/antes-depois/reabilitacao-antes.jpg` / `-depois.jpg` | Comparador — "Reabilitação do Sorriso" | Foto composta enviada (recortada em duas) |
| `public/images/galeria/g4` → reaproveita `reabilitacao-depois.jpg` | Galeria — Sorrisos | Mesmo caso acima |
| `public/images/servicos/aparelhos.jpg` | Card "Aparelhos Ortodônticos" | Reaproveita a foto "depois" do caso de ortodontia |
| `public/images/servicos/facetas.jpg` | Card "Facetas de Porcelana" | Reaproveita a foto "depois" da reabilitação |

**Ainda são placeholders genéricos de marca** (sem foto real disponível ainda) —
substitua pelo nome exato quando tiver a foto:

| Caminho | Onde aparece | Proporção sugerida |
|---|---|---|
| `public/images/servicos/implantes.jpg` | Card "Implantes Dentários" | 3:2 |
| `public/images/servicos/lentes.jpg` | Card "Lentes de Contato Dental" | 3:2 |
| `public/images/servicos/botox.jpg` | Card "Botox Terapêutico" | 3:2 |
| `public/images/servicos/harmonizacao.jpg` | Card "Harmonização Facial" | 3:2 |
| `public/images/servicos/proteses.jpg` | Card "Próteses Dentárias" | 3:2 |
| `public/images/servicos/clareamento.jpg` | Card "Clareamento Dental" | 3:2 |
| `public/images/servicos/canal.jpg` | Card "Tratamento de Canal" | 3:2 |
| `public/images/servicos/limpeza.jpg` | Card "Limpeza e Prevenção" | 3:2 |
| `public/images/galeria/planejamento-3d.jpg` | Galeria — Procedimentos | 4:3 |
| `public/images/galeria/lentes-contato.jpg` | Galeria — Sorrisos | 4:3 |
| `public/images/banners/banner-principal.jpg` | Reservado para o futuro painel de banners (ainda não renderizado no site) | 16:9 |
| `public/og-image.jpg` | Capa de compartilhamento (WhatsApp, redes sociais) | 1200×630 exato |
| `public/favicon.svg` | Ícone da aba do navegador | já é a marca "OS", pode manter |

Dica para o comparador de antes/depois: use fotos no **mesmo ângulo, mesma
distância e mesma iluminação** — é isso que faz o efeito de arrastar
funcionar bem.

## ⚠️ Verificar: CRO e nome no material fotografado

Nas fotos da fachada e da recepção que você enviou, a placa física da
clínica está escrita **"Dr. Carlos Siqueira"** (sem "Luiz") e mostra
**CRO 11233** — diferente do que você me passou no início (**Dr. Luiz
Carlos Siqueira, CRO 17251-PE**), que é o que está no código agora
(`src/data/site.json`).

Não alterei o CRO nem o nome automaticamente — é um dado sensível
(registro profissional) e prefiro confirmar com você do que arriscar
publicar um número errado. Me diga qual está correto (pode ser que a
placa antiga não tenha sido atualizada) e eu ajusto `site.json` no
mesmo minuto.

## Antes de publicar

Já resolvido nesta entrega:

- ✅ **Imagens reais** aplicadas em Hero, Sobre, Galeria, Serviços e
  Antes/Depois (ver tabela acima).
- ✅ **Mapa**: `mapaEmbedUrl` em `src/data/site.json` aponta para as
  coordenadas reais da Av. Dona Melica, João de Deus, Petrolina/PE
  (`-9.3568598, -40.5378592`). Isso localiza a **rua** corretamente.
  Quando a clínica tiver perfil no Google Business, troque pelo link
  "Compartilhar → Incorporar um mapa" gerado direto no perfil, para
  cravar o pino exato do prédio.
- ✅ **og-image.jpg**: gerada com a identidade visual da marca.

Ainda pendente:

1. **Confirmar CRO/nome** (ver aviso acima).
2. Trocar os `youtubeId` em `src/data/videos.json` pelos vídeos reais
   (os valores atuais são apenas placeholders de exemplo).
3. Revisar textos de depoimentos com autorização dos pacientes (LGPD)
   — os de `src/data/depoimentos.json` e `googleReviews.json` continuam
   fictícios, para preencher o layout (nenhuma foto real foi associada
   a eles).
4. Fotos reais dos serviços que ainda estão com placeholder genérico
   (implantes, lentes, botox, harmonização, próteses, clareamento,
   canal, limpeza).
