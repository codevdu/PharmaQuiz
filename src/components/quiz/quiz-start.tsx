"use client";
import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Atom,
  BookOpen,
  Check,
  CheckCheck,
  ChevronDown,
  Clock3,
  Dna,
  FlaskConical,
  GraduationCap,
  Layers3,
  ListChecks,
  Shuffle,
  Sparkles,
  Zap,
} from "lucide-react";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { Card } from "@/src/components/ui/card";
import { Separator } from "@/src/components/ui/separator";
import {
  categoryFilters,
  filterQuestions,
  questions,
} from "@/src/data/questions";
import { cn } from "@/src/lib/utils";
import { ScienceIllustration } from "./science-illustration";

const topics = [
  {
    title: "Aminoácidos",
    description: "Estrutura, propriedades e ponto isoelétrico.",
    icon: Atom,
    color: "mint",
  },
  {
    title: "Proteínas",
    description: "Da sequência à estrutura e função.",
    icon: Dna,
    color: "lavender",
  },
  {
    title: "Enzimas",
    description: "Catálise, cinética e inibição enzimática.",
    icon: FlaskConical,
    color: "sand",
  },
  {
    title: "Metabolismo",
    description: "As vias que transformam energia em vida.",
    icon: Zap,
    color: "blue",
  },
];

export function QuizStart({
  category,
  onCategoryChange,
  count,
  onCountChange,
  onStart,
}: {
  category: string;
  onCategoryChange: (category: string) => void;
  count: number;
  onCountChange: (count: number) => void;
  onStart: () => void;
}) {
  const [allTopics, setAllTopics] = useState(false);
  const pool = filterQuestions(category);
  const actualCount = Math.min(count, pool.length);
  const choices = [
    ...new Set(
      [5, 10, 15, 20]
        .filter((n) => n <= pool.length)
        .concat(pool.length < 5 ? [pool.length] : []),
    ),
  ];
  const selectTopic = (topic: string) => {
    onCategoryChange(topic);
    document
      .getElementById("personalizar")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <>
      <section className="hero-section" id="inicio">
        <div className="page-container hero-content">
          <div className="hero-copy">
            <Badge className="hero-eyebrow">
              <span className="size-1.5 rounded-full bg-primary" /> UM NOVO
              JEITO DE REVISAR
            </Badge>
            <h1>
              Quiz de
              <br />
              <span>
                Bioquímica<span className="hero-period">.</span>
              </span>
            </h1>
            <p className="hero-subtitle">
              Teste seus conhecimentos de Bioquímica
              <br className="hidden lg:block" /> aplicada à Farmácia.
            </p>
            <p className="hero-description">
              Responda questões sobre aminoácidos, proteínas, enzimas,
              metabolismo energético e aplicações farmacêuticas.
            </p>
            <a className="hero-anchor" href="#personalizar">
              Seu próximo aprendizado começa aqui <ArrowDown size={15} />
            </a>
          </div>
          <ScienceIllustration />
        </div>
        <div className="page-container">
          <div className="hero-stats">
            <div>
              <BookOpen />
              <span>
                <strong>{questions.length} questões</strong>
                <span>para ampliar seu conhecimento</span>
              </span>
            </div>
            <div>
              <GraduationCap />
              <span>
                <strong>Graduação em Farmácia</strong>
                <span>conteúdo conectado à sua formação</span>
              </span>
            </div>
            <div>
              <ListChecks />
              <span>
                <strong>Múltipla escolha</strong>
                <span>aprenda com cada resposta</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="page-container home-content">
        <section id="personalizar" className="setup-section scroll-mt-24">
          <div className="section-heading">
            <div>
              <div className="eyebrow">UM PASSO DE CADA VEZ</div>
              <h2>Prepare sua sessão de estudos</h2>
              <p>Escolha um tema, ajuste o ritmo e vamos começar.</p>
            </div>
            <Badge className="hidden sm:inline-flex bg-white border border-border text-muted-foreground">
              <span className="size-1.5 rounded-full bg-primary" /> No seu
              tempo, sem pressão
            </Badge>
          </div>
          <Card className="setup-card">
            <div className="setup-options">
              <label className="field-label">
                <Layers3 size={16} /> O que vamos revisar?
              </label>
              <div
                className="category-chips"
                aria-label="Categoria das questões"
              >
                {categoryFilters.map((item) => (
                  <button
                    key={item}
                    aria-pressed={category === item}
                    onClick={() => onCategoryChange(item)}
                    className={cn(
                      "category-chip",
                      category === item && "selected",
                    )}
                  >
                    {category === item && <Check size={13} />}
                    {item}
                  </button>
                ))}
                {!categoryFilters.some((item) => item === category) && (
                  <button
                    className="category-chip selected"
                    aria-pressed="true"
                  >
                    <Check size={13} />
                    {category}
                  </button>
                )}
              </div>
              <Separator className="my-6" />
              <div className="count-setting">
                <div>
                  <label htmlFor="question-count" className="field-label">
                    Número de questões
                  </label>
                  <p>Uma sessão do tamanho da sua rotina.</p>
                </div>
                <div className="select-wrap">
                  <select
                    id="question-count"
                    value={actualCount}
                    onChange={(e) => onCountChange(Number(e.target.value))}
                  >
                    {!choices.includes(actualCount) && (
                      <option value={actualCount}>
                        {actualCount} questões
                      </option>
                    )}
                    {choices.map((n) => (
                      <option key={n} value={n}>
                        {n} questões
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={15} />
                </div>
              </div>
              <p className="pool-note">
                <BookOpen size={13} />
                {pool.length} questões disponíveis{" "}
                {category === "Todas" ? "no banco completo" : "neste tema"}
              </p>
            </div>
            <div className="start-panel">
              <span className="start-icon">
                <Sparkles size={22} />
              </span>
              <h3>Pronto para se desafiar?</h3>
              <p>
                Cada pergunta é uma oportunidade
                <br className="hidden lg:block" /> de aprender um pouco mais.
              </p>
              <div className="session-meta">
                <span>
                  <ListChecks size={14} />
                  {actualCount} questões
                </span>
                <span>
                  <Clock3 size={14} />~{actualCount} min
                </span>
              </div>
              <Button onClick={onStart} size="lg" className="w-full">
                Iniciar Quiz <ArrowRight size={17} />
              </Button>
              <span className="start-footnote">
                <Shuffle size={12} />
                Uma nova seleção a cada tentativa
              </span>
            </div>
          </Card>
        </section>

        <section id="temas" className="topics-section scroll-mt-24">
          <div className="section-heading">
            <div>
              <div className="eyebrow">EXPLORE O CONHECIMENTO</div>
              <h2>Da teoria à prática farmacêutica</h2>
            </div>
            <button
              className="text-link"
              onClick={() => setAllTopics(!allTopics)}
              aria-expanded={allTopics}
            >
              {allTopics ? "Mostrar menos" : "Ver todos os 12 temas"}
              <ArrowRight size={15} className={allTopics ? "-rotate-90" : ""} />
            </button>
          </div>
          <div className="topic-grid">
            {topics.map(({ title, description, icon: Icon, color }) => (
              <button
                key={title}
                className="topic-card"
                onClick={() => selectTopic(title)}
              >
                <div className="flex items-center justify-between">
                  <span className={cn("topic-icon", color)}>
                    <Icon size={21} />
                  </span>
                  <ArrowRight size={16} className="topic-arrow" />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="topic-count">
                  {filterQuestions(title).length} questões
                </span>
              </button>
            ))}
          </div>
          {allTopics && (
            <div className="all-topics animate-enter">
              {[...new Set(questions.map((q) => q.category))].map((topic) => (
                <button key={topic} onClick={() => selectTopic(topic)}>
                  <span>{topic}</span>
                  <Badge>{filterQuestions(topic).length}</Badge>
                </button>
              ))}
            </div>
          )}
        </section>

        <section id="como-funciona" className="how-section scroll-mt-24">
          <div className="how-heading">
            <span className="topic-icon mint">
              <BookOpen size={22} />
            </span>
            <h2>
              Estudar pode ser
              <br />
              mais simples.
            </h2>
          </div>
          <div className="how-step">
            <span>01</span>
            <h3>Escolha seu foco</h3>
            <p>
              Revise tudo ou aprofunde
              <br />
              um tema específico.
            </p>
          </div>
          <div className="how-step">
            <span>02</span>
            <h3>Responda e aprenda</h3>
            <p>
              Receba a correção e entenda
              <br />o porquê de cada resposta.
            </p>
          </div>
          <div className="how-step">
            <span>03</span>
            <h3>Acompanhe seu resultado</h3>
            <p>
              Revise seus acertos e erros.
              <br />
              Tente de novo, evolua sempre.
            </p>
          </div>
        </section>
        <div className="study-note">
          <CheckCheck size={16} />
          <span>
            Feito para aprender, não para competir. Cada tentativa conta.
          </span>
        </div>
      </div>
    </>
  );
}
