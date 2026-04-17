# Decisões de Design — 4Life Nutrition

Registro vivo de todas as decisões de design tomadas no projeto. Atualizar conforme o projeto avança.

---

## Decisão #1: Direção Visual — "Clean Organic Premium"
**Data:** 2026-04-16
**Status:** Definido

A 4Life NÃO segue a estética tradicional de loja de suplementos (cores neon, fontes impactantes, visual agressivo). A paleta terrosa (marrom/bege/verde) e a tipografia Hanken Grotesk posicionam a marca como **wellness premium**.

**Direção:** Editorial limpo com whitespace generoso, hierarquia tipográfica forte, fotografias lifestyle, tons terrosos.

**Referências que mais se alinham:**
- **Sult Hydration** → Whitespace, hierarquia tipográfica, editorial clean
- **Essential Nutrition** → Estrutura de navegação, organização premium
- **Pharmax** → Autoridade e trust, densidade informativa nos cards

**Referências de suporte (elementos específicos):**
- **NutriGo** → Cards funcionais com add to cart direto
- **Viva True** → Social proof e influencer blocks (para futuro)
- **LiveGood** → Tabs e accordions para economia de espaço

---

## Decisão #2: Paleta de Cores
**Data:** 2026-04-16
**Status:** Definido

Paleta extraída diretamente dos assets da identidade visual (SVGs do logo):

```
Primary (Brown):     #412E28  — Textos, headings, CTAs primários, navbar
Secondary (Beige):   #ECE0D0  — Background principal, elementos light, cards
Accent (Green):      #6A714E  — Badges, CTAs secundários, success states
White:               #FAFAF8  — Background alternativo, superfícies elevadas
Brown Light:         #5C443C  — Hover states, bordas
Beige Dark:          #D4C8B8  — Separadores, muted text, dividers
```

**Uso em contexto:**
- Fundo da página: `#ECE0D0` (beige) ou `#FAFAF8` (white), alternando entre seções
- Texto principal: `#412E28` (brown)
- Texto secundário: `#5C443C` (brown light)
- CTAs primários: `#412E28` bg + `#ECE0D0` text
- CTAs secundários: `#6A714E` bg + `#ECE0D0` text
- Hover: darken/lighten 10%
- Badges/tags: `#6A714E` com opacity

---

## Decisão #3: Tipografia — Hanken Grotesk Only
**Data:** 2026-04-16
**Status:** Definido

Uma única família tipográfica para toda a loja. Variação via peso, não via múltiplas fontes.

```
Escala tipográfica (mobile → desktop):

Display:    36px → 56px  | Bold (700)     | Tracking: -0.02em
H1:         30px → 44px  | SemiBold (600) | Tracking: -0.01em
H2:         24px → 32px  | SemiBold (600) | Tracking: -0.01em
H3:         20px → 24px  | Medium (500)   | Tracking: 0
Body:       16px → 16px  | Regular (400)  | Line-height: 1.6
Body Small: 14px → 14px  | Regular (400)  | Line-height: 1.5
Caption:    12px → 12px  | Medium (500)   | Tracking: 0.02em | Uppercase para labels
```

**Nota:** Existe também a fonte "Hector Modern Sans Serif" nos assets de tipografia (zip). Verificar com cliente se é usada em algum contexto específico (possível display font para campanhas).

---

## Decisão #4: Estrutura da Homepage
**Data:** 2026-04-16
**Status:** Definido

12 seções definidas (ver `docs/STRUCTURE.md` para detalhes):

1. Announcement Bar
2. Header/Nav
3. Hero Section
4. Trust Bar
5. Categorias (visual com fotos dos frascos)
6. Mais Vendidos (grid com quick add)
7. Shop by Goal (4 blocos por objetivo)
8. Product Highlight
9. Social Proof
10. Sobre a Marca (mini)
11. Newsletter
12. Footer

**Racional:** Fluxo que educa e constrói confiança antes de vender. Inspirado no modelo de "descoberta assistida" da Essential Nutrition + o editorial clean da Sult, adaptado ao catálogo e estágio da 4Life.

---

## Decisão #5: Product Card Design
**Data:** 2026-04-16
**Status:** Definido

Card funcional inspirado em NutriGo e Essential:
- Foto do produto (ambientada quando possível)
- Nome do produto
- Preço + parcelamento (ex: "12x de R$ 9,58")
- Badge de categoria/selo (quando aplicável)
- Botão "Adicionar" (quick add to cart)
- Hover: elevação sutil (shadow) + highlight na imagem

**Sem:** rating/estrelas na fase 1 (não há reviews ainda). Adicionar quando tiver massa crítica.

---

## Decisão #6: Mobile-First Responsive
**Data:** 2026-04-16
**Status:** Definido

Breakpoints:
```
sm:  375px  (mobile base)
md:  768px  (tablet)
lg:  1024px (desktop)
xl:  1440px (desktop wide)
```

**Princípios:**
- Design começa no mobile
- Categorias: scroll horizontal no mobile, grid no desktop
- Produtos: 2 colunas mobile, 3-4 desktop
- Carrinho: drawer fullscreen mobile, slide-over desktop
- Menu: hamburger + drawer mobile, mega menu desktop

---

---

## Decisão #7: Arquitetura — Medusa JS + Next.js + VPS
**Data:** 2026-04-16
**Status:** Definido

- **Storefront:** Next.js (App Router) + Tailwind → Vercel
- **Backend:** Medusa JS v2 (headless commerce) → VPS
- **Banco:** PostgreSQL (padrão Medusa)
- **Admin:** Medusa Admin built-in + extensões custom para blog e banners
- **Automações:** N8N no VPS → webhooks Medusa para WhatsApp
- **Não é um "Agente de IA"** — são automações simples de notificação via N8N

**Racional:** Medusa dá admin pronto (produtos, pedidos, estoque, clientes), evitando reconstruir do zero. O design system do admin Medusa é separado do storefront — não impacta o visual da loja. Extensões custom (blog, banners) são módulos Medusa simples.

**Sobre imagens:** Medusa armazena as imagens originais. Um subscriber/hook no upload converte para WebP (85-90% quality) e gera thumbnails. No frontend, `next/image` faz otimização adicional on-the-fly.

---

## Decisão #8: Fonte Secundária — Plus Jakarta Sans
**Data:** 2026-04-16 (revisada em 2026-04-17)
**Status:** Definido

Plus Jakarta Sans como fonte secundária para contextos complementares (labels, metadata, preços, dados em tabelas, captions). Hanken Grotesk continua como primária para headings, body e UI principal. Hector Modern Sans Serif descartada.

**Por que trocou (Inter → Plus Jakarta Sans):** Inter e Hanken Grotesk são muito similares visualmente (ambas sans-serif geométricas neutras), criando redundância sem hierarquia. Plus Jakarta Sans tem personalidade mais distinta — curvas mais abertas e humanas — gerando contraste real com o Hanken, sem quebrar a estética.

---

## Decisão #9: Reviews — Custom via Compra
**Data:** 2026-04-16
**Status:** Definido

Reviews são coletadas pós-entrega: cliente recebe convite (WhatsApp/email via N8N) para avaliar o produto. Avaliação: 1-5 estrelas + texto. Exibidas na PDP. Moderação via admin Medusa.

Sem integração externa (Trustpilot, Yotpo) — mantém controle e evita custo de licença.

---

## Decisão #10: Social Proof — Estático na Fase 1
**Data:** 2026-04-16
**Status:** Definido

Depoimentos definidos manualmente no código/admin. Não virão de nenhuma fonte dinâmica por enquanto. Expandir para UGC/influenciadores conforme a marca crescer.

---

## Decisão #11: Homepage — 14 Seções (atualizado)
**Data:** 2026-04-16
**Status:** Definido

Adicionadas 2 novas seções ao mapa original:
- **Seção 10: Blog Preview** — Cards de posts recentes do blog
- **Seção 11: Seja um Revendedor (CTA B2B)** — Banner com CTA para landing page B2B

Total agora: 14 seções. Ver `docs/STRUCTURE.md` para detalhes.

---

---

## Decisão #12: Referências Visuais — Síntese Final
**Data:** 2026-04-16
**Status:** Definido

13 referências visuais analisadas. Síntese por componente:

**Homepage visual:**
- Whitespace generoso + tipografia bold grande (Doggy, IKKARI, ref orgânica lowercase)
- Grids assimétricos intercalando lifestyle + produto (Barocena, ref "ethical beauty")
- Background: alternar entre `#ECE0D0` (bege) e `#FAFAF8` (white) entre seções
- Hero editorial com fotografia lifestyle, não packshot (Sult + ref "Glow Confidently")

**PDP (Página de Produto):**
- Layout 50/50: galeria esquerda, info direita (Candii, Kanva)
- Toggle "Assine e Economize" vs "Compra Única" na PDP (Candii) — Subscribe & Save
- Trust badges inline após o formulário (Kanva: ISO 9001, ANVISA, Frete Grátis, Rastreabilidade)
- Tabs: Benefícios | Tabela Nutricional | Como Usar | Avaliações (Beauty Shop)
- FAQ accordion no produto (Kanva)
- "Quem comprou também comprou" com cards grandes (Helpers Essence)
- Breakdown de reviews com gráfico de distribuição (Beauty Shop)

**PLP (Catálogo):**
- Chip filters horizontais (Doggy, IKKARI) — NÃO sidebar para catálogo de 10 SKUs
- Grid 3 colunas desktop / 2 mobile com whitespace generoso
- Badges nos cards: "Mais Vendido" | "Novo" | "Essencial 4Life" (IKKARI)
- Título da categoria em tipografia grande (Doggy)
- Intercalar blocos editoriais entre produtos (ref coleção editorial)
- Cards: foto ambientada + nome + preço + CTA quick add

---

## Decisão #13: Signature na PDP (não em página isolada)
**Data:** 2026-04-16
**Status:** Proposto

O modelo Candii (Subscribe & Save toggle na PDP) converte mais do que uma página separada de assinatura. Proposta:
- Toda PDP tem toggle: "Compra única: R$X" vs "Assine e economize: R$Y/mês (-10%)"
- Página "Signature" vira landing explicativa do programa, não o ponto de conversão
- A conversão real da assinatura acontece na PDP de cada produto

**Aguardando:** Confirmação do cliente sobre mecânica do Signature.

---

## Decisão #14: PDP Funcional-Premium (Revisada)
**Data:** 2026-04-17
**Status:** Definido (revisada — descartada versão landing page por complexidade de conteúdo)

PDP funcional, limpa e completa — sem depender de conteúdo editorial custom por produto. Tudo alimentado por campos padrão do Medusa (descrição, imagens, metadata). Bonita pela diagramação e tipografia, não por conteúdo artesanal.

**Refs base:** Kanva/Glow Milk (trust badges, FAQ, galeria), Helpers Essence (accordions, related products), Beauty Shop (reviews com breakdown)

**Estrutura:**

```
1. HERO DE PRODUTO (50/50 — galeria | info)
   Esquerda:
   - Galeria de imagens (thumb lateral ou inferior, zoom on hover)
   Direita:
   - Breadcrumb
   - Nome do produto
   - Preço + parcelamento ("12x de R$X,XX")
   - Seletor de variação (sabor/tamanho)
   - Toggle: Compra Única vs Assine e Economize (Signature)
   - Quantidade + Botão "Adicionar ao Carrinho"
   - Trust badges inline: ISO 9001 | Frete Grátis +R$299 | Rastreabilidade

2. TABS DE CONTEÚDO
   Tab "Descrição": texto do campo description do Medusa (benefícios, pra quem é, diferencial)
   Tab "Tabela Nutricional": imagem ou tabela da composição
   Tab "Como Usar": dosagem, horário, modo de preparo
   → Todo conteúdo vem de campos de texto simples, não de estruturas complexas

3. AVALIAÇÕES
   - Nota agregada + breakdown em barras (5→1)
   - Reviews individuais (nome, data, nota, texto)
   - Fase 1: estático | Fase 2: dinâmico pós-compra

4. PRODUTOS RELACIONADOS
   - "Complete sua rotina" ou "Você também pode gostar"
   - Grid de 3-4 cards (mesmos cards da PLP)
```

**Campos no Medusa (todos padrão ou metadata simples):**

| Campo | Tipo | Onde no Medusa |
|-------|------|----------------|
| Título | texto | `title` (nativo) |
| Descrição | rich text | `description` (nativo) |
| Imagens | galeria | `images` (nativo) |
| Preço/variações | money | `variants` (nativo) |
| Tabela nutricional | texto ou imagem | `metadata.nutritional_info` |
| Como usar | texto | `metadata.how_to_use` |
| Tags (Mais Vendido, Novo) | tags | `tags` (nativo) |
| Categoria/Objetivo | collection | `collections` (nativo) |

Zero extensões custom. Zero campos editoriais artesanais. Tudo roda com o Medusa vanilla.

**O que se perde vs landing page:** Os blocos editoriais visuais (headline custom, foto lifestyle, grid de benefícios com ícones, FAQ por produto). **O que se ganha:** Lançamento rápido, manutenção simples, qualquer produto novo é cadastrado em 5 minutos.

---

## Decisão #15: Fluxo Revendedor — Form + Automação
**Data:** 2026-04-17
**Status:** Definido

- Hero da landing page B2B tem formulário de email integrado
- Ao submeter email: automação (N8N) envia catálogo/proposta comercial via WhatsApp + inicia conversa
- Revendedor NÃO compra pelo site — encomenda via contato direto com comercial
- Pedido mínimo: a definir

---

## Decisão #16: Homepage — Reduzida para 12 Seções
**Data:** 2026-04-17
**Status:** Definido (validado pelo cliente)

Após validação das 14 seções com o cliente, removidas 2 seções redundantes:

- **Removida: Trust Bar** — Condições comerciais (frete R$299, 12x) já ficam na announcement bar no topo. Repetir como régua de confiança logo após o hero era redundante.
- **Removida: Newsletter como seção isolada** — Movida para integração inline no footer. Seção dedicada quebrava o ritmo editorial e competia com o manifesto final.

**Nova ordem (12 seções):** Announcement Bar → Header → Hero → Categorias → Mais Vendidos → Shop by Goal → Product Highlight → Social Proof → Blog Preview → CTA Revendedor → Manifesto Final → Footer (com newsletter).

**Racional:** O manifesto vira o último bloco de conteúdo, fechando a página emocionalmente com o slogan "Your Health, Our Mission." antes da parte prática do footer. Padrão editorial clean (Sult, Essential).

---

## Decisão #18: Footer com Assinatura Tipográfica (ref Cleaning)
**Data:** 2026-04-17
**Status:** Definido

Footer da 4Life inspirado na ref Cleaning, com 3 camadas verticais:

1. **Institucional + Newsletter** (camada funcional):
   - Logo 4Life + frase breve institucional (ex: "Suplementação nutricional brasileira desenvolvida com ciência aplicada e padrão ISO 9001")
   - Colunas: Objetivos | Categorias | Institucional | Atendimento
   - Newsletter inline ("Receba ofertas exclusivas e novidades" + email + botão)
   - Redes sociais (@4lifenutrition_)

2. **Assinatura Tipográfica** (elemento gráfico):
   - "4LIFE NUTRITION" em tipografia display gigante
   - Ponta a ponta da tela
   - Efeito fade (gradient mask nas extremidades/base)
   - É elemento visual, não leitura — assinatura da marca

3. **Bottom bar** (legal):
   - Copyright, CNPJ, endereço completo
   - Ícones de formas de pagamento
   - Links: Privacidade · Termos · Cookies

**Paleta:** Background `#412E28` (marrom), texto `#ECE0D0` (bege).

**Nota:** Footer NÃO substitui o manifesto (seção #11). Manifesto carrega a **mensagem** da marca ("Your Health, Our Mission."), footer carrega a **assinatura visual** ("4Life Nutrition" display). São funções complementares, não redundantes.

---

## Decisão #17: Shipping — Flat fee até migração para Melhor Envio
**Data:** 2026-04-17
**Status:** Provisório

Shipping atual: "Envio Padrão" R$25 + "Frete Grátis" acima de R$299 (flat fee manual).

Na fase final, migrar para integração **Melhor Envio** (mesma abordagem do projeto underground com Superfrete). Requer conta comercial no Melhor Envio, a ser configurada com o cliente.

**How to apply:** Não investir tempo em refinar shipping options manuais — elas serão descartadas na migração.

---

## Decisões Pendentes

- [ ] Gateway de pagamento — provável Stripe, a confirmar
- [ ] Care Club — aguardando briefing do cliente (`docs/BRIEFING-CLIENTE.md`)
- [ ] Signature — mecânica de assinatura (briefing enviado, aguardando retorno)
- [ ] Referência visual de header/navegação — componente crítico ainda sem ref visual
- [ ] Conta Melhor Envio — necessária para migração do shipping
