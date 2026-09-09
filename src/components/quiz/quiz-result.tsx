"use client";
import { useState } from "react";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  RotateCcw,
  Sparkles,
  Trophy,
  XCircle,
} from "lucide-react";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { Card } from "@/src/components/ui/card";
import type { Question, QuizAnswer } from "@/src/types/quiz";
import { QuizReview } from "./quiz-review";

export function QuizResult({
  questions,
  answers,
  onRestart,
  onHome,
}: {
  questions: Question[];
  answers: QuizAnswer[];
  onRestart: () => void;
  onHome: () => void;
}) {
  const [review, setReview] = useState(false);
  const score = answers.filter((a) => a.isCorrect).length;
  const percent = Math.round((score / questions.length) * 100);
  const message =
    percent === 100
      ? "Excelente! Você dominou este quiz."
      : percent >= 80
        ? "Muito bem!"
        : percent >= 50
          ? "Bom progresso"
          : "Continue estudando";
  const showReview = () => {
    setReview(true);
    requestAnimationFrame(() => {
      document
        .getElementById("revisao")
        ?.scrollIntoView({ behavior: "smooth" });
      document.getElementById("review-title")?.focus({ preventScroll: true });
    });
  };
  return (
    <div className="animate-enter">
      <Card className="result-card">
        <Badge>
          <CheckCircle2 size={13} />
          Quiz finalizado
        </Badge>
        <div className="result-trophy">
          <Trophy size={28} />
        </div>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {message}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Mais uma etapa na construção do seu conhecimento.
        </p>
        <div
          className="score-circle"
          style={{
            background: `conic-gradient(var(--primary) ${percent}%, var(--secondary) 0)`,
          }}
        >
          <div>
            <strong>
              {score}
              <span> / {questions.length}</span>
            </strong>
            <span>questões corretas</span>
          </div>
        </div>
        <div className="result-stats">
          <div>
            <CheckCircle2 className="text-primary" />
            <strong>{score}</strong>
            <span>Acertos</span>
          </div>
          <div>
            <XCircle className="text-orange-600" />
            <strong>{questions.length - score}</strong>
            <span>Erros</span>
          </div>
          <div>
            <Sparkles className="text-primary" />
            <strong>{percent}%</strong>
            <span>Aproveitamento</span>
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button onClick={onRestart}>
            <RotateCcw />
            Refazer Quiz
          </Button>
          <Button variant="outline" onClick={showReview}>
            <BookOpen />
            Revisar respostas
          </Button>
        </div>
        <Button className="mt-4" variant="ghost" onClick={onHome}>
          <ArrowLeft />
          Escolher outro tema
        </Button>
      </Card>
      {review && <QuizReview questions={questions} answers={answers} />}
    </div>
  );
}
