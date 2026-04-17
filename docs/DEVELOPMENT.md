# Guia de Desenvolvimento Local

## Arquitetura

```
┌─────────────────────────────┐      ┌──────────────────────────┐
│   Local (sua máquina)       │      │   VPS (187.77.233.97)    │
│                             │      │                          │
│   storefront/ (Next.js)     │ ───► │   fl-medusa (API)        │
│   localhost:8000            │HTTPS │   fl-postgres            │
│                             │      │   fl-redis               │
│                             │      │   /opt/stacks/4life-medusa│
└─────────────────────────────┘      └──────────────────────────┘
         bun                          4life-api.byvot.com
```

## Primeira Configuração

O storefront conecta direto no `https://4life-api.byvot.com` — não precisa de SSH tunnel.

### 1. Instalar dependências do storefront

```bash
cd storefront
bun install
```

### 2. Rodar storefront

```bash
bun dev
```

Storefront acessível em: **http://localhost:8000**

## Credenciais & Endpoints

### Medusa Backend (VPS)
- **API:** https://4life-api.byvot.com
- **Admin:** https://4life-admin.byvot.com/app
- **Admin login:** admin@4lifenutrition.com.br / 4LifeAdmin2026!
- **Publishable key:** `pk_09e2e1772b473eeba8a8996ba92c22de98c05dd57506a567289ff8917404879b`
- **Region:** Brasil (BRL)

### VPS
- **SSH:** `ssh root@187.77.233.97`
- **Stack path:** `/opt/stacks/4life-medusa/`
- **Logs:** `ssh root@187.77.233.97 "docker logs -f fl-medusa"`
- **Restart:** `ssh root@187.77.233.97 "cd /opt/stacks/4life-medusa && docker compose restart fl-medusa"`

## Estrutura

```
4life-ecom/
├── CLAUDE.md              # Contexto do projeto para Claude
├── brand/                 # Logos SVG
├── docs/                  # Documentação (PRD, STRUCTURE, DESIGN-DECISIONS)
├── refs/                  # Referências visuais (home, pdp, catalog)
├── storefront/            # Next.js storefront (frontend da loja)
└── (VPS) /opt/stacks/4life-medusa/   # Backend Medusa + Postgres + Redis
```

## Workflow

1. Desenvolvimento do frontend: editar `storefront/` (Bun + Next.js)
2. Produtos, pedidos, configurações: admin do Medusa em https://4life-admin.byvot.com/app
3. Extensões custom (blog, banners): adicionar em `/opt/stacks/4life-medusa/src/` na VPS
4. Deploy storefront: Vercel (configurar depois)
