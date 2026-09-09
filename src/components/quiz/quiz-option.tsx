import { CheckCircle2, XCircle } from "lucide-react";
import { RadioGroupItem } from "@/src/components/ui/radio-group";
import { cn } from "@/src/lib/utils";

export function QuizOption({
  id,
  text,
  letter,
  selected,
  confirmed,
  correct,
}: {
  id: string;
  text: string;
  letter: string;
  selected: boolean;
  confirmed: boolean;
  correct: boolean;
}) {
  const result =
    confirmed && (correct ? "correct" : selected ? "incorrect" : "muted");
  return (
    <label
      htmlFor={`option-${id}`}
      className={cn(
        "quiz-option",
        selected && "is-selected",
        result && `is-${result}`,
        confirmed && "is-locked",
      )}
    >
      <span className="option-letter">{letter}</span>
      <span className="flex-1 leading-6">{text}</span>
      <RadioGroupItem
        id={`option-${id}`}
        value={id}
        className={cn(confirmed && "sr-only")}
      />
      {confirmed && correct && (
        <CheckCircle2
          className="size-5 shrink-0"
          aria-label="Resposta correta"
        />
      )}
      {confirmed && selected && !correct && (
        <XCircle className="size-5 shrink-0" aria-label="Resposta incorreta" />
      )}
    </label>
  );
}
