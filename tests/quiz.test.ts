import { test } from "node:test";
import assert from "node:assert/strict";
import { questions, filterQuestions } from "../src/data/questions";
import { createQuiz, shuffleArray } from "../src/lib/shuffle";

test("bank has 40 unique, complete questions covering 12 categories", () => {
  assert.equal(questions.length, 40);
  assert.equal(new Set(questions.map((q) => q.id)).size, questions.length);
  assert.equal(new Set(questions.map((q) => q.category)).size, 12);
  for (const q of questions) {
    assert.equal(q.options.length, 4);
    assert.equal(new Set(q.options.map((o) => o.id)).size, 4);
    assert.equal(q.options.filter((o) => o.id === q.correctOptionId).length, 1);
    assert.ok(q.explanation.length > 60);
  }
});

test("shuffle preserves all values without mutating its input", () => {
  const source = [1, 2, 3, 4, 5];
  const result = shuffleArray(source);
  assert.notEqual(result, source);
  assert.deepEqual(source, [1, 2, 3, 4, 5]);
  assert.deepEqual(result.toSorted(), source);
  assert.deepEqual(shuffleArray([]), []);
});

test("rounds are unique, capped, and preserve answer identity after shuffling", () => {
  const before = JSON.stringify(questions);
  for (let run = 0; run < 100; run++) {
    const round = createQuiz(questions, 10);
    assert.equal(round.length, 10);
    assert.equal(new Set(round.map((q) => q.id)).size, 10);
    for (const q of round) {
      const original = questions.find((item) => item.id === q.id)!;
      assert.equal(
        q.options.find((o) => o.id === q.correctOptionId)?.text,
        original.options.find((o) => o.id === original.correctOptionId)?.text,
      );
    }
  }
  assert.equal(JSON.stringify(questions), before);
  const filtered = filterQuestions("Aminoácidos");
  assert.equal(createQuiz(filtered, 20).length, filtered.length);
  assert.ok(filtered.every((q) => q.category === "Aminoácidos"));
  assert.equal(filterQuestions("Metabolismo").length, 8);
});

test("retry uses other questions when available and changes order when pool is exhausted", () => {
  const first = createQuiz(questions, 10);
  const ids = first.map((q) => q.id);
  const second = createQuiz(questions, 10, ids);
  assert.ok(second.every((q) => !ids.includes(q.id)));
  const pool = filterQuestions("Proteínas");
  const previous = createQuiz(pool, 10);
  const next = createQuiz(
    pool,
    10,
    previous.map((q) => q.id),
  );
  assert.notDeepEqual(
    next.map((q) => q.id),
    previous.map((q) => q.id),
  );
});
