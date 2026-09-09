export type Question = {
  id: string;
  category: string;
  question: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
  explanation: string;
};

export type QuizStatus = "idle" | "playing" | "finished";
export type QuizAnswer = {
  questionId: string;
  selectedOptionId: string;
  correctOptionId: string;
  isCorrect: boolean;
};
