import { CheckCircle2, XCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";
import { Badge } from "@/src/components/ui/badge";
import { Card } from "@/src/components/ui/card";
import type { Question, QuizAnswer } from "@/src/types/quiz";

export function QuizReview({
  questions,
  answers,
}: {
  questions: Question[];
  answers: QuizAnswer[];
}) {
  return (
    <section
      id="revisao"
      className="mt-9 scroll-mt-24 animate-enter"
      aria-labelledby="review-title"
    >
      <h2
        id="review-title"
        tabIndex={-1}
        className="mb-2 text-2xl font-semibold tracking-tight outline-none"
      >
        Revisão das respostas
      </h2>
      <p className="mb-6 text-sm text-muted-foreground">
        Volte a cada questão e transforme a revisão em aprendizado.
      </p>
      <Card className="px-5 sm:px-7">
        <Accordion type="multiple">
          {questions.map((question, index) => {
            const answer = answers.find(
              (item) => item.questionId === question.id,
            );
            if (!answer) return null;
            const Icon = answer.isCorrect ? CheckCircle2 : XCircle;
            return (
              <AccordionItem value={question.id} key={question.id}>
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                    <Icon
                      className={`size-5 shrink-0 ${answer.isCorrect ? "text-primary" : "text-orange-600"}`}
                    />
                    <div>
                      <span className="mb-1 block text-xs text-muted-foreground">
                        Questão {index + 1} ·{" "}
                        {answer.isCorrect ? "Correta" : "Incorreta"}
                      </span>
                      <span className="leading-6">{question.question}</span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pl-8 leading-6">
                    <Badge>{question.category}</Badge>
                    <div>
                      <span className="block text-xs font-semibold text-muted-foreground">
                        Resposta escolhida
                      </span>
                      <p>
                        {
                          question.options.find(
                            (o) => o.id === answer.selectedOptionId,
                          )?.text
                        }
                      </p>
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-primary">
                        Resposta correta
                      </span>
                      <p>
                        {
                          question.options.find(
                            (o) => o.id === question.correctOptionId,
                          )?.text
                        }
                      </p>
                    </div>
                    <div className="rounded-lg bg-muted p-4">
                      <strong className="mb-1 block">Explicação</strong>
                      <p className="text-muted-foreground">
                        {question.explanation}
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </Card>
    </section>
  );
}
