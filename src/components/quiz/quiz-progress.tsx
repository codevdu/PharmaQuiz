import { CheckCircle2 } from "lucide-react";
import { Progress } from "@/src/components/ui/progress";

export function QuizProgress({
  current,
  total,
  score,
}: {
  current: number;
  total: number;
  score: number;
}) {
  const percent = Math.round((current / total) * 100);
  return (
    <div className="mb-7">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3 text-sm">
        <span className="font-medium">
          Questão {current}{" "}
          <span className="text-muted-foreground">de {total}</span>
        </span>
        <span className="flex items-center gap-1.5 text-primary">
          <CheckCircle2 size={15} />
          {score} {score === 1 ? "acerto" : "acertos"}
        </span>
      </div>
      <Progress
        value={percent}
        aria-label={`Progresso: questão ${current} de ${total}`}
      />
      <p className="mt-2 text-right text-xs text-muted-foreground">
        {percent}%
      </p>
    </div>
  );
}
