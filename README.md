# Humanly × JOVI

Landing page conceitual criada para a Sprint 3 do Challenge FIAP × JOVI 2026. O projeto apresenta uma experiência de câmera mais humana, rápida, contextual e intuitiva para estudantes full-time.

> **Conceito:** A vida não espera o modo certo. Uma câmera que acompanha o seu ritmo — e não o contrário.

## Objetivo

Apresentar o problema de interfaces de câmera complexas e demonstrar, por meio de uma narrativa interativa, como a experiência Humanly reduz a procura manual por modos sem inventar especificações técnicas de hardware.

## Tecnologias

- React 19
- Vite 7
- Framer Motion 12
- CSS Grid e CSS responsivo
- HTML semântico e recursos nativos de acessibilidade
- Web Storage API (`localStorage`)

## Instalação

Requisitos: Node.js 20.19+ ou 22.12+ e npm.

```bash
npm install
```

## Execução

```bash
npm run dev
```

Abra o endereço local informado pelo Vite. Para gerar e conferir a versão de produção:

```bash
npm run build
npm run preview
```

Para executar a análise estática:

```bash
npm run lint
```

## Funcionalidades

- Navegação suave e menu hamburger animado no mobile.
- Storytelling de scroll: problema, rotina, solução, experiência, resultado e equipe.
- Demonstração conceitual com quatro contextos e transições via `AnimatePresence`.
- Preferência de modo e rascunho do formulário armazenados em `localStorage`.
- Simulação de captura com identificador gerado por operações da API `Math`.
- Timeline interativa da persona Lia.
- Formulário com labels, validação, foco visível e feedback acessível.
- Suporte a `prefers-reduced-motion`.

O formulário é uma demonstração front-end e não envia dados a um servidor. O projeto não possui autenticação; portanto, não há usuários ou senhas de teste.

## CSS Grid

O Grid participa da estrutura real do projeto. Ele é usado no hero, pilares da solução, seletor de modos, composição da persona, timeline, galeria assimétrica, equipe, contato e rodapé. As folhas de estilo declaram `grid-template-columns`, `grid-template-rows`, `gap`, `grid-column` e `grid-row`, com reorganizações específicas para desktop, tablet e mobile.

## Estrutura

```text
src/
├── assets/          # imagem WebP otimizada
├── components/      # seções e componentes reutilizáveis
├── data/            # conteúdo estruturado
├── hooks/           # hook customizado de persistência
├── styles/          # identidade visual e breakpoints
├── App.jsx
└── main.jsx
```

## Responsividade testada

- Desktop: 1920, 1440 e 1366 px
- Tablet: 1024 e 768 px
- Mobile: 430, 390 e 375 px

## Uso de IA

A IA foi utilizada como apoio na organização do código, revisão dos requisitos, criação da identidade visual, geração de uma fotografia ficcional da persona e planejamento das animações. A implementação final foi estruturada em componentes React e revisada com build, lint e inspeção visual. Nenhum texto ou recurso técnico de hardware foi apresentado como uma funcionalidade real da JOVI.

## Integrantes

- Eduardo Bechara Medeiros Craveiro — RM 571081
- Bruno Carreiro Dos Santos — RM 569423
- Gustavo Moita de Lima — RM 569180

Os mesmos dados estão no arquivo obrigatório `INTEGRANTES.TXT` na raiz do projeto.

## Links

- Repositório: https://github.com/GustavoMoita/sprint3-front-end
- Deploy no GitHub Pages: https://gustavomoita.github.io/sprint3-front-end/
