# PRD — 4Life Nutrition Ecommerce

## Visão Geral

| Campo | Valor |
|-------|-------|
| Projeto | E-commerce 4Life Nutrition |
| Cliente | Renzo Fontana |
| Desenvolvedor | Pedro Moraes |
| Orçamento | R$ 3.500,00 |
| Início | 02/04/2026 |
| Prazo | 6-8 semanas |
| Stack | Next.js + Tailwind CSS |
| Plataforma atual | NuvemShop (migração) |

## Problema
A 4Life está na NuvemShop e enfrenta limitações de personalização, performance e funcionalidades. A loja atual não reflete a identidade premium da marca e carece de recursos como automações via WhatsApp.

## Solução
Ecommerce do zero com Next.js (storefront) + Medusa JS (backend/admin), com identidade visual alinhada à marca, alta performance, e funcionalidades que plataformas fechadas não oferecem.

## Arquitetura Técnica

| Camada | Tecnologia | Notas |
|--------|-----------|-------|
| Storefront | Next.js (App Router) + Tailwind CSS | Deploy: Vercel |
| Backend/Commerce | Medusa JS v2 | Headless commerce, API-first |
| Banco de Dados | PostgreSQL | Padrão Medusa |
| Admin | Medusa Admin (built-in) + extensões custom | Blog, Care Club, etc. |
| Automações | N8N | WhatsApp notifications via webhooks |
| Hospedagem Backend | VPS | Medusa + Postgres + N8N |
| Imagens | Pipeline de otimização (WebP) + next/image | Script de otimização no upload |
| Pagamento | Stripe (provável) | A confirmar |

---

## Páginas do Site

### 1. Homepage
**Objetivo:** Converter visitantes em compradores; comunicar a proposta de valor da marca.
**Seções detalhadas em:** `docs/STRUCTURE.md`

### 2. Página de Categoria (PLP — Product Listing Page)
**Objetivo:** Permitir descoberta e filtragem eficiente de produtos.
- Header da categoria com título e descrição
- Filtros laterais: objetivo, tipo, preço, avaliação
- Grid de produtos (3-4 colunas desktop, 2 mobile)
- Sort: relevância, preço, mais vendidos, novidades
- Paginação ou infinite scroll
- Quick add to cart nos cards

### 3. Página de Produto (PDP — Product Detail Page)
**Objetivo:** Convencer e converter — todas as informações para decisão de compra.
- Galeria de imagens (zoom, múltiplos ângulos)
- Nome, preço, parcelamento, frete estimado
- Seletor de variações (sabor, tamanho)
- Botão comprar + adicionar ao carrinho
- Tabela nutricional
- Descrição detalhada com benefícios
- Reviews/avaliações
- Produtos relacionados / "Quem comprou também comprou"
- Badges de confiança (selo de qualidade, frete grátis)

### 4. Carrinho (Cart)
**Objetivo:** Resumo claro antes do checkout, sem friccão.
- Drawer lateral (slide-over) para não tirar o usuário da navegação
- Lista de itens com imagem, nome, qtd, preço unitário e subtotal
- Editar quantidade / remover
- Cálculo de frete por CEP
- Cupom de desconto
- Subtotal + frete + total
- CTA: "Finalizar Compra"

### 5. Checkout
**Objetivo:** Finalizar a compra com mínimo atrito.
- Step 1: Dados pessoais (ou login)
- Step 2: Endereço de entrega + frete
- Step 3: Pagamento (Pix, Cartão, Boleto)
- Step 4: Confirmação/Resumo
- Trust signals visíveis (segurança, selos)

### 6. Sobre Nós
**Objetivo:** Construir autoridade e conexão com a marca.
- História da marca
- Missão, visão, valores
- Diferenciais (qualidade, ingredientes, processo)
- Foto/vídeo do fundador ou equipe

### 7. Contato
- Formulário de contato
- WhatsApp direto
- FAQ básico

### 8. Minha Conta (Área do Cliente)
- Login/Cadastro
- Meus pedidos (status, rastreamento)
- Dados pessoais
- Endereços salvos
- Favoritos

### 9. Painel Administrativo (Medusa Admin + extensões)
- Dashboard com métricas (vendas, pedidos, faturamento) — Medusa built-in
- CRUD de produtos (nome, preço, imagens, variações, estoque) — Medusa built-in
- Gestão de pedidos (status, detalhes, atualização) — Medusa built-in
- Gestão de clientes — Medusa built-in
- Gestão de estoque — Medusa built-in
- **Gestão de Blog** — Extensão custom (CRUD de posts, categorias, editor rich text)
- **Gestão de banners/promos** — Extensão custom (controle do hero e promos da home)
- Relatórios

### 10. Seja um Revendedor (Landing Page B2B)
**Objetivo:** Converter lojistas/profissionais interessados em parceiros da marca.
- Hero com proposta de valor para parceiros
- Diferenciais comerciais (margem, logística, suporte, consistência)
- Catálogo/carrossel de produtos com detalhes relevantes para B2B
- Cards de produto clicáveis (levam à PDP)
- Os 4 pilares da marca
- Marketing & suporte oferecido
- Formulário de interesse / contato comercial
- **Copy base:** Apresentação comercial do cliente (adaptar para web)

### 11. Blog 4Life
**Objetivo:** Conteúdo educativo para SEO, autoridade e engajamento.
- Listagem de posts com cards (imagem, título, resumo, data)
- Filtro por categoria (nutrição, treino, saúde, receitas, marca)
- Página individual de post
- Posts relacionados
- CTA para produtos mencionados no conteúdo
- Share social

### 12. Care Club — Clube de Benefícios e Prescritores
**Objetivo:** Programa de fidelidade/benefícios (detalhes pendentes do cliente).
- **Aguardando briefing do cliente** — ver `docs/BRIEFING-CLIENTE.md`
- Página explicativa do programa
- Fluxo de cadastro/adesão
- Área logada com benefícios

### 13. Signature — Assinatura 4Life
**Objetivo:** Modelo de recorrência/assinatura mensal (detalhes pendentes do cliente).
- **Aguardando briefing do cliente** — ver `docs/BRIEFING-CLIENTE.md`
- Página explicativa do modelo
- Seleção de produtos/box
- Gestão de assinatura na área do cliente

### 14. Páginas de Políticas (LGPD obrigatório)
**Objetivo:** Conformidade legal com LGPD e legislação brasileira de e-commerce.
- Política de Privacidade
- Termos de Uso
- Política de Cookies (com banner de consentimento)
- Política de Trocas e Devoluções
- Política de Envio e Frete

---

## Funcionalidades Core

### Catálogo & Busca
- [ ] Listagem de produtos por categoria e objetivo
- [ ] Busca com autocomplete
- [ ] Filtros e ordenação
- [ ] Quick view / quick add to cart

### Carrinho & Checkout
- [ ] Carrinho lateral persistente
- [ ] Cálculo de frete por CEP
- [ ] Cupons de desconto
- [ ] Checkout em steps com validação
- [ ] Resumo do pedido

### Pagamento
- [ ] Pix (com QR Code e copia e cola)
- [ ] Cartão de crédito (parcelamento)
- [ ] Boleto bancário
- [ ] Gateway: A definir (Mercado Pago, Stripe, PagSeguro)

### Frete
- [ ] Cálculo automático por CEP
- [ ] Múltiplas opções de envio
- [ ] Frete grátis condicional

### WhatsApp Automations
- [ ] Notificação: novo pedido recebido
- [ ] Notificação: pagamento confirmado
- [ ] Notificação: pedido enviado (com código de rastreio)

### Automações N8N (substituiu "Agente de IA")
- [ ] Webhook de eventos do Medusa → N8N
- [ ] N8N envia mensagem WhatsApp ao cliente nos 3 eventos
- [ ] Configuração dos templates de mensagem

### Reviews de Produto
- [ ] Após entrega, cliente recebe convite para avaliar o produto (via WhatsApp/email)
- [ ] Avaliação: nota (1-5 estrelas) + texto opcional
- [ ] Exibição na PDP do produto avaliado
- [ ] Moderação no admin

### Blog
- [ ] CRUD de posts no admin (Medusa extensão custom)
- [ ] Listagem pública com cards
- [ ] Página individual do post (SEO-friendly URLs)
- [ ] Categorias de conteúdo
- [ ] Integração com produtos (CTA contextual)

### Otimização de Imagens
- [ ] Script de processamento no upload (Medusa subscriber/hook)
- [ ] Conversão para WebP com qualidade alta (85-90%)
- [ ] Resize para tamanhos padrão (thumbnail, card, PDP, full)
- [ ] next/image no frontend para otimização adicional on-the-fly

### SEO & Performance
- [ ] Meta tags dinâmicas por página
- [ ] Schema markup (Product, BreadcrumbList, Organization)
- [ ] Sitemap.xml e robots.txt
- [ ] Core Web Vitals otimizados (LCP < 2.5s, CLS < 0.1)
- [ ] Imagens otimizadas (WebP, srcset, lazy loading)
- [ ] SSR/SSG onde apropriado

---

## Critérios de Aceite
- Loja funcional com fluxo completo: descoberta → carrinho → checkout → pagamento
- Responsivo em 375px, 768px, 1024px, 1440px
- Performance: Lighthouse > 90 em todas as métricas
- Integração de pagamento funcional com pelo menos Pix + Cartão
- Painel admin operacional para gestão de produtos e pedidos
- Automações WhatsApp ativas para os 3 eventos (via N8N)
- Blog funcional com CRUD no admin
- Páginas de políticas (LGPD) publicadas
- Landing page "Seja um Revendedor" funcional

---

## Fora do Escopo
- Custos de hospedagem e domínio
- Licenças de APIs de terceiros
- Criação de conteúdo (textos, fotos, vídeos)
- Alterações de escopo após aprovação
