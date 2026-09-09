import type { Question } from "@/src/types/quiz";

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Prefer unused questions, then fill from the previous round if necessary.
export function createQuiz(
  pool: Question[],
  count: number,
  previousIds: string[] = [],
): Question[] {
  const previous = new Set(previousIds);
  const fresh = shuffleArray(pool.filter((q) => !previous.has(q.id)));
  const repeated = shuffleArray(pool.filter((q) => previous.has(q.id)));
  const selected = shuffleArray(
    [...fresh, ...repeated].slice(0, Math.min(count, pool.length)),
  );
  // Also guarantee a different sequence when the filtered pool has to be reused.
  if (
    selected.length > 1 &&
    selected.every((q, i) => q.id === previousIds[i])
  ) {
    selected.push(selected.shift()!);
  }
  return selected.map((q) => ({ ...q, options: shuffleArray(q.options) }));
}
