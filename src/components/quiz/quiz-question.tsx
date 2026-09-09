"use client";
import { ArrowRight, Check, Lightbulb } from "lucide-react";
import { useEffect, useRef } from "react";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { Card } from "@/src/components/ui/card";
import { RadioGroup } from "@/src/components/ui/radio-group";
import type { Question, QuizAnswer } from "@/src/types/quiz";
import { QuizOption } from "./quiz-option";
import { QuizFeedback } from "./quiz-feedback";

export function QuizQuestion({
  question,
  selectedOptionId,
  answer,
  isLast,
  onSelect,
  onConfirm,
  onNext,
}: {
  question: Question;
  selectedOptionId: string;
  answer?: QuizAnswer;
  isLast: boolean;
  onSelect: (id: string) => void;
  onConfirm: () => void;
  onNext: () => void;
}) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    titleRef.current?.focus({ preventScroll: true });
  }, [question.id]);
  return (
    <Card className="question-card animate-enter">
      <Badge>{question.category}</Badge>
      <h1
        id="question-title"
        ref={titleRef}
        tabIndex={-1}
        className="my-6 text-xl leading-relaxed font-semibold tracking-tight outline-none sm:text-2xl"
      >
        {question.question}
      </h1>
      <RadioGroup
        aria-labelledby="question-title"
        value={selectedOptionId}
        onValueChange={onSelect}
        disabled={!!answer}
      >
        {question.options.map((option, index) => (
          <QuizOption
            key={option.id}
            {...option}
            letter={String.fromCharCode(65 + index)}
            selected={selectedOptionId === option.id}
            confirmed={!!answer}
            correct={option.id === question.correctOptionId}
          />
        ))}
      </RadioGroup>
      {answer && (
        <QuizFeedback
          isCorrect={answer.isCorrect}
          explanation={question.explanation}
        />
      )}
      <div className="question-actions">
        <span>
          <Lightbulb size={15} />
          {answer
            ? "Um novo conhecimento para levar com você."
            : "Escolha uma alternativa e confirme."}
        </span>
        {answer ? (
          <Button onClick={onNext}>
            {isLast ? "Ver resultado" : "Próxima questão"}
            <ArrowRight />
          </Button>
        ) : (
          <Button onClick={onConfirm} disabled={!selectedOptionId}>
            Confirmar resposta
            <Check />
          </Button>
        )}
      </div>
    </Card>
  );
}
