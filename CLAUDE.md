# 4Life Nutrition — Ecommerce Personalizado

## Contexto do Projeto
E-commerce custom para **4Life Nutrition** (suplementos alimentares), migrando da NuvemShop para uma loja com código próprio. Cliente: Renzo Fontana. Dev: Pedro Moraes.

**Objetivo:** Loja com identidade própria, alta performance, focada em conversão, com total controle sobre funcionalidades e escalabilidade futura.

## Stack Técnica
- **Storefront:** Next.js (App Router) + Tailwind CSS → Deploy: Vercel
- **Backend/Commerce:** Medusa JS v2 (headless, API-first) → Deploy: VPS
- **Banco de Dados:** PostgreSQL (padrão Medusa)
- **Admin:** Medusa Admin (built-in) + extensões custom (blog, banners)
- **Automações:** N8N (WhatsApp notifications via webhooks Medusa)
- **Tipografia:** Hanken Grotesk (primária) + Plus Jakarta Sans (secundária)
- **Ícones:** Lucide Icons (SVG, consistente, sem emojis como ícones)
- **Pagamento:** Stripe (provável, a confirmar)
- **Frete:** Integração por CEP com transportadoras
- **Imagens:** Pipeline de otimização (WebP 85-90% quality) no upload + next/image no frontend

## Identidade Visual

### Cores da Marca
| Token | Hex | Uso |
|-------|-----|-----|
| `brand-brown` | `#412E28` | Cor primária (textos, headers, CTAs primários) |
| `brand-beige` | `#ECE0D0` | Cor de fundo principal, elementos light |
| `brand-green` | `#6A714E` | Cor de destaque/accent (badges, CTAs secundários, estados de sucesso) |
| `brand-white` | `#FAFAF8` | Background alternativo, cards |
| `brand-brown-light` | `#5C443C` | Hover states, bordas |
| `brand-beige-dark` | `#D4C8B8` | Bordas, separadores, muted elements |

### Tipografia
- **Primária:** Hanken Grotesk (todos os pesos: 300-900) — headings, body, UI
- **Secundária:** Plus Jakarta Sans — texto funcional, labels, dados, admin-like contexts
- **Headings:** Hanken Grotesk Bold/SemiBold
- **Body:** Hanken Grotesk Regular (16px base)
- **Captions/Labels:** Plus Jakarta Sans Medium ou Hanken Grotesk Medium

### Logo
- Versões disponíveis: completa (com/sem box), símbolo (com/sem box)
- Variações de cor: bege, marrom, branco, preto, verde
- SVGs em `/brand/`

### Estética
**Clean Organic Premium** — Não é a loja de suplementos barulhenta. É uma marca de wellness que vende suplementos. Referências visuais: editorial limpo (Sult), hierarquia tipográfica forte, whitespace generoso, fotografias lifestyle, paleta terrosa.

## Estrutura de Documentação
- `docs/PRD.md` — Product Requirements Document (escopo, funcionalidades, critérios)
- `docs/DESIGN-DECISIONS.md` — Registro de decisões de design (atualizar conforme avança)
- `docs/STRUCTURE.md` — Mapa de páginas e seções do site
- `docs/PROGRESS.md` — Diário de progresso do projeto

## Convenções de Código
- Componentes em PascalCase, arquivos em kebab-case
- CSS via Tailwind utilities, design tokens no `tailwind.config`
- Componentes organizados por domínio: `/components/ui/`, `/components/product/`, `/components/cart/`, `/components/layout/`
- Server Components por padrão, Client Components apenas quando necessário (interatividade)
- Imagens otimizadas com `next/image`, lazy loading below-fold
- Responsive: mobile-first (375px → 768px → 1024px → 1440px)

## Regras de UI/UX
- Todos elementos clicáveis têm `cursor-pointer`
- Transições suaves (150-300ms) em hover/focus
- Skeleton screens para estados de loading
- Contraste mínimo 4.5:1 (WCAG AA)
- `prefers-reduced-motion` respeitado
- Focus states visíveis para navegação por teclado
- Sem emojis como ícones — usar Lucide Icons (SVG)
- Hover states sem layout shift (usar opacity/color, não scale que desloca)

## Infraestrutura (Medusa Admin)

**Admin URL:** https://4life-admin.byvot.com/app
**API URL:** https://4life-api.byvot.com
**Admin login:** `admin@4lifenutrition.com.br` / `4LifeAdmin2026!`
**Publishable key:** `pk_09e2e1772b473eeba8a8996ba92c22de98c05dd57506a567289ff8917404879b`

### Collections (Objetivos)
- Energia & Performance
- Força & Massa Muscular
- Sono & Recuperação
- Saúde & Longevidade

### Product Categories (Tipos)
Proteínas, Creatina, Vitaminas e Minerais, Pré-treinos, Glutamina, Sono & Reparo, Termogênicos, Kits, Essenciais 4Life

### Product Tags (Badges)
Mais Vendido, Novo, Essencial 4Life, Lançamento, Esgotado em Breve

### Shipping
- Stock Location: 4Life Nutrition - Guarapari (ES)
- Envio Padrão: R$ 25
- Frete Grátis: >= R$ 299 (automático)

### Widget Custom
Extensão admin em `src/admin/widgets/product-4life-info.tsx` renderiza campos amigáveis para `metadata.how_to_use` e `metadata.nutritional_info` na tela de produto.

## Informações Comerciais
- **Frete grátis:** A partir de R$ 299
- **Parcelamento:** Até 12x com juros. Somente 1ª parcela sem juros
- **WhatsApp:** +55 27 99634-3701
- **Email:** 4lifenutrition@gmail.com
- **Instagram:** @4lifenutrition_
- **Slogan:** "Your Health, Our Mission."
- **CNPJ:** 27699666000136
- **Endereço:** Av. Davino Mattos, 417 - 2º Andar - Centro, Guarapari - ES, CEP 29200-480

## Público-Alvo
Pessoas que valorizam saúde, estética e performance. Atletas, praticantes de musculação, idosos buscando longevidade, e público wellness em geral. Faixa ampla mas com comunicação premium e educativa.

## Categorias de Produto
**Por Objetivo:** Energia & Performance | Força & Massa Muscular | Sono & Recuperação | Saúde & Longevidade
**Por Tipo:** Proteínas | Creatina | Vitaminas e Minerais | Pré-treinos | Glutamina | Sono & Reparo | Termogênicos | Kits
