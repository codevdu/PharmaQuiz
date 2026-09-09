# BioQuiz

Quiz de Bioquímica aplicada à Farmácia, feito com Next.js App Router, TypeScript, Tailwind CSS, componentes shadcn/ui baseados em Radix UI e ícones Lucide.

## Executar

```bash
bun install
bun dev
```

Acesse http://localhost:3000.

## Produção estática

```bash
bun run build
bun run start
```

O build gera a pasta `out/`, pronta para hospedagem estática. `start` apenas serve esses arquivos para pré-visualização. Não há backend, API Routes, banco de dados, autenticação ou chamadas a serviços externos. As fontes Geist também são locais.

Na Vercel, `vercel.json` fixa o Bun 1.4.0 durante instalação e build, usa o lockfile em modo congelado e publica a pasta `out/`. O build de produção usa Webpack para evitar uma incompatibilidade do parser CSS do Turbopack observada no ambiente Linux da Vercel.

## Funcionalidades

- 40 questões em 12 categorias, com quatro alternativas e explicações.
- Sessão padrão de 10 questões; seletor de 5, 10, 15 ou 20, limitado ao conjunto disponível.
- Filtros principais e acesso às 12 categorias por “Ver todos os 12 temas”. Metabolismo reúne metabolismo energético, glicólise, ciclo de Krebs e cadeia respiratória.
- Embaralhamento Fisher–Yates de perguntas e alternativas apenas ao iniciar ou refazer o quiz.
- Confirmação explícita, correção imediata e bloqueio de respostas já confirmadas.
- Progresso, pontuação, resultado e revisão em accordion.
- Nova tentativa prioriza questões ausentes da tentativa anterior. Quando necessário, reutiliza questões com nova sequência.
- Layout responsivo, navegação por teclado, feedback acessível e respeito à preferência por movimento reduzido.

As respostas ficam somente no estado do React e são apagadas ao recarregar a página. A mensagem de resultado usa o percentual, para funcionar também com sessões menores ou maiores que 10 perguntas.

## Estrutura

```text
app/
  page.tsx                  Entrada do App Router
  layout.tsx                Idioma, metadados e fontes locais
  globals.css               Tema e estilos responsivos
src/
  components/
    ui/                     Componentes shadcn/ui personalizados
    quiz/
      quiz.tsx              Estado e transições da sessão
      quiz-start.tsx        Apresentação, filtros e quantidade
      science-illustration.tsx
      quiz-progress.tsx
      quiz-question.tsx
      quiz-option.tsx
      quiz-feedback.tsx
      quiz-result.tsx
      quiz-review.tsx
  data/questions.ts         Banco local e filtros
  lib/shuffle.ts            Embaralhamento e seleção da sessão
  lib/utils.ts              Composição de classes CSS
  types/quiz.ts             Question, QuizAnswer e QuizStatus
 tests/
  quiz.test.ts              Integridade do banco e seleção
  e2e/quiz.spec.ts           Fluxos no navegador
```

## Adicionar questões

Edite `src/data/questions.ts`. Cada pergunta tem ID único, categoria, enunciado, alternativas com IDs estáveis, `correctOptionId` e explicação. A função auxiliar `question()` converte o registro de alternativas no tipo `Question`; o argumento `correctOptionId` identifica explicitamente a alternativa correta, independentemente de sua posição. Não use índices para validar respostas.

## Verificação

```bash
bun run lint
bun run test
bun run build
bun run test:e2e
```

Os testes E2E usam Microsoft Edge instalado (`channel: "msedge"`) e a exportação estática na porta 3100. Em ambientes sem Edge, instale Chromium com `bunx playwright install chromium` e remova `channel` de `playwright.config.ts`.

A cobertura inclui integridade das 40 questões, preservação dos dados originais, resposta correta após embaralhamento, limites dos filtros, tentativas sem repetição quando possível, bloqueio após confirmação, resultados, revisão, navegação mobile e ausência de requisições externas no navegador.
