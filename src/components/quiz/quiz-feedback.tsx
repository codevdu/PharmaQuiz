import { CheckCircle2, XCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/src/components/ui/alert";

export function QuizFeedback({
  isCorrect,
  explanation,
}: {
  isCorrect: boolean;
  explanation: string;
}) {
  const Icon = isCorrect ? CheckCircle2 : XCircle;
  return (
    <Alert
      className={`mt-6 animate-enter ${isCorrect ? "border-emerald-200 bg-emerald-50/70 text-emerald-900" : "border-orange-200 bg-orange-50/70 text-orange-950"}`}
    >
      <AlertTitle>
        <Icon size={18} />
        {isCorrect ? "Resposta correta!" : "Resposta incorreta"}
      </AlertTitle>
      <AlertDescription>
        <strong className="mb-1 block text-xs font-semibold uppercase tracking-wider">
          Explicação
        </strong>
        {explanation}
      </AlertDescription>
    </Alert>
  );
}
