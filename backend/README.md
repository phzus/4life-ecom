# 4Life Medusa Backend

Backend do e-commerce 4Life Nutrition. Medusa JS v2 rodando em Docker com Postgres + Redis.

## Deploy

Roda na VPS (187.77.233.97) em `/opt/stacks/4life-medusa/` via Docker Compose, com Traefik roteando:
- Admin: https://4life-admin.byvot.com/app
- API: https://4life-api.byvot.com

## Estrutura

```
backend/
├── src/
│   ├── admin/
│   │   ├── lib/
│   │   │   ├── sdk.ts              # Medusa JS SDK client
│   │   │   └── theme-override.tsx  # Injeta identidade visual 4Life no admin
│   │   └── widgets/
│   │       ├── product-4life-info.tsx   # Campos "Como Usar" e "Tabela Nutricional" na PDP
│   │       ├── theme-login.tsx          # Theme na tela de login
│   │       ├── theme-product-list.tsx   # Theme na listagem de produtos
│   │       ├── theme-order-list.tsx     # Theme na listagem de pedidos
│   │       └── theme-customer-list.tsx  # Theme na listagem de clientes
│   └── api/middlewares.ts
├── Dockerfile
├── docker-compose.yml
├── medusa-config.ts
├── package.json
└── pnpm-lock.yaml
```

## Desenvolvimento

### Atualizar código na VPS

Após mudanças locais, subir pra VPS e rebuildar:

```bash
# Sincronizar arquivos (substituir mudanças)
scp -r src/* root@187.77.233.97:/opt/stacks/4life-medusa/src/

# Rebuildar + restart
ssh root@187.77.233.97 "cd /opt/stacks/4life-medusa && docker compose build fl-medusa && docker compose up -d fl-medusa"
```

### Logs

```bash
ssh root@187.77.233.97 "docker logs -f fl-medusa"
```

## Versionamento

Medusa `2.13.6` pinado. Ver `docs/DESIGN-DECISIONS.md#19` para precauções de update relacionadas ao admin theme.
