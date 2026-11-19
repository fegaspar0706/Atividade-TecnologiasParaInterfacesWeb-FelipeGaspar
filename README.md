# Atividade de Tecnologias para Interfaces Web — Portfólio — Felipe Gaspar Barberato

Projeto de portfólio pessoal para a **Atividade 1 — Tecnologias para Interfaces de Aplicações Web (IFTM — Campus Uberaba Parque Tecnológico)**. Migração dos dados e projetos do portfólio PHP fornecido para **Vite + React + TypeScript + Tailwind CSS v4**.

## Pré-requisitos e execução

Instale o [Node.js](https://nodejs.org/). No terminal, dentro da pasta que contém `package.json`:

```bash
npm install
npm run dev
```

Abra o endereço exibido pelo Vite (normalmente `http://localhost:5173/`). Para verificar o build:

```bash
npm run build
npm run preview
```

**Não é necessário Next.js, PHP, XAMPP ou MySQL para executar este portfólio.**

## Componentes (`src/components`)

| Componente | Responsabilidade |
|---|---|
| `Container` | Envolve `children` e padroniza largura e espaçamento. |
| `Header` | Exibe marca e navegação com âncoras. |
| `Hero` | Apresenta nome, profissão e foto pessoal. |
| `Secao` | Seção reutilizável com título, descrição e `children`. |
| `HabilidadeCard` | Exibe nome, categoria e nível de uma habilidade tipada. |
| `ProjetoCard` | Exibe imagem, descrição, tecnologias e link condicional. |
| `FormacaoCard` | Exibe os dados tipados de um item da formação. |
| `Contato` | Exibe e-mail, telefone/WhatsApp e redes sociais. |
| `Rodape` | Exibe créditos e ano atual. |

## Organização

- `src/types/index.ts`: os tipos `Projeto`, `Habilidade`, `Experiencia` e `Nivel`.
- `src/data/conteudo.ts`: arrays tipados renderizados com `.map()` e `key`, além de dados de perfil.
- `src/components/`: componentes reutilizáveis, todos com `type` nas props.
- `src/index.css`: único CSS autoral, com importação do Tailwind v4.
- `public/img/`: imagens originais, incluindo foto pessoal, favicon e capturas dos projetos.
- `public/projetos/`: cópias dos projetos estáticos originais; **são demonstrações independentes em HTML/CSS/JS, não componentes React**.

## Projetos incluídos

1. **RecargaBUS** — link externo mantido como no original; requer disponibilidade do site externo.
2. **Uhub — Protótipo** — demonstração estática do arquivo enviado. A versão posterior em PHP/MySQL não está incluída neste pacote.
3. **Trontris** — jogo HTML/CSS/JS original.
4. **Quiz Literário** — quiz HTML/CSS/JS original.
5. **The Velvet Echoes** — site estático de artista fictício, com suas páginas e recursos originais.

O portfólio em React não depende dos arquivos PHP do portfólio anterior.

## Requisitos atendidos

- React + Vite + TypeScript + Tailwind CSS v4.
- Mais de cinco componentes com props tipadas via `type`.
- `children` em `Container` e `Secao`.
- Projetos, habilidades e formação provenientes de arrays tipados, com `.map()` e `key`.
- Renderização condicional (destaque, andamento, links opcionais, descrição).
- Responsividade (1 coluna no celular, 2 no tablet e 3 no desktop) e estados `hover`/`focus-visible`.
- Imagens com `alt`, `h1` no hero, `h2` nas seções e `h3` nos cards.


## Git: sugestão de commits

```bash
git init
git add .
git commit -m "chore: configurar React, TypeScript e Tailwind v4"
# Faça mudanças incrementais antes dos próximos commits reais.
```

A avaliação solicita commits: o histórico deve refletir alterações reais feitas por você, não commits simulados.


## Imagens reais dos projetos

Os cards de projetos exibem as capturas originais presentes em `public/img/`, sem imagens de banco ou ilustrações genéricas. As imagens são referenciadas no array tipado `src/data/conteudo.ts` e exibidas pelo componente `ProjetoCard.tsx` com `object-contain`, preservando o enquadramento completo.
