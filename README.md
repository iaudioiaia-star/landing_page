# Landing Page — iaudio

Site de marketing da **iaudio**, serviço de produção musical personalizada via chat.

---

## O que o projeto faz

- Apresenta o serviço com seções de hero, vídeo, depoimentos e estatísticas
- Direciona o usuário para uma página de chat (`/chat`) onde ele faz o pedido da música
- O chat é carregado via widget externo do **Wavechat** (`api.wavechat.com.br`)

---

## Tecnologias

| Camada | Tecnologia |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite |
| Estilo | Tailwind CSS |
| Componentes | shadcn/ui + Radix UI |
| Roteamento | React Router DOM |
| Deploy | Vercel |

---

## Estrutura de pastas

```
src/
├── components/        # Seções da landing page (Hero, Footer, etc.)
│   └── ui/            # Componentes genéricos do shadcn/ui (botões, cards...)
├── pages/
│   ├── Index.tsx      # Página principal — monta todas as seções
│   ├── Chat.tsx       # Página do chat — carrega o widget Wavechat
│   └── NotFound.tsx   # Página 404
├── hooks/             # Hooks reutilizáveis (toast, detecção mobile)
├── lib/               # Utilitários (cn, logger)
├── App.tsx            # Configura rotas e providers globais
└── main.tsx           # Ponto de entrada do React
```

---

## Como rodar localmente

**Pré-requisitos:** Node.js 18+ instalado

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor de desenvolvimento
npm run dev
```

O site abre em `http://localhost:8080`

---

## Comandos disponíveis

```bash
npm run dev        # Servidor de desenvolvimento com hot reload
npm run build      # Gera build de produção na pasta /dist
npm run preview    # Visualiza o build de produção localmente
npm run lint       # Verifica erros de código com ESLint
npm run test       # Roda os testes com Vitest
```

---

## Rotas

| Rota | Página |
|---|---|
| `/` | Landing page (todas as seções) |
| `/chat` | Chat com o widget Wavechat |
| `*` | Página 404 |

---

## Deploy

O projeto está configurado para o **Vercel**. O arquivo `vercel.json` garante que todas as rotas redirecionem para o `index.html` (necessário para SPA com React Router).

Para fazer deploy: suba o repositório no Vercel e aponte para a branch `main`. O Vercel detecta o Vite automaticamente.

---

## Adicionando novas seções à landing page

1. Crie o componente em `src/components/NomeDaSecao.tsx`
2. Importe e adicione em `src/pages/Index.tsx`

Exemplo:
```tsx
// src/pages/Index.tsx
import NomeDaSecao from "@/components/NomeDaSecao";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <Hero />
    <NomeDaSecao />  {/* <- adicione aqui */}
    <Footer />
  </div>
);
```
