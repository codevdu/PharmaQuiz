import { test, expect, type Page } from "@playwright/test";
import { questions } from "../../src/data/questions";

async function completeRound(page: Page, correctCount: number, total = 10) {
  const seen: string[] = [];
  for (let index = 0; index < total; index++) {
    const title = page.locator("#question-title");
    await expect(title).toBeVisible();
    const text = await title.innerText();
    const question = questions.find((q) => q.question === text)!;
    expect(question).toBeTruthy();
    seen.push(question.id);
    await expect(
      page.getByRole("button", { name: "Confirmar resposta" }),
    ).toBeDisabled();
    const option = question.options.find((o) =>
      index < correctCount
        ? o.id === question.correctOptionId
        : o.id !== question.correctOptionId,
    )!;
    await page.getByRole("radio", { name: option.text, exact: false }).check();
    await page.getByRole("button", { name: "Confirmar resposta" }).click();
    await expect(page.getByRole("status")).toContainText(
      index < correctCount ? "Resposta correta!" : "Resposta incorreta",
    );
    await expect(page.locator(".quiz-option.is-correct")).toContainText(
      question.options.find((o) => o.id === question.correctOptionId)!.text,
    );
    for (const radio of await page.getByRole("radio").all())
      await expect(radio).toBeDisabled();
    await page
      .getByRole("button", {
        name: index === total - 1 ? "Ver resultado" : "Próxima questão",
      })
      .click();
  }
  return seen;
}

test("full quiz, locked answers, score, review, and a fresh retry", async ({
  page,
}) => {
  const errors: string[] = [];
  const externalRequests: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("request", (request) => {
    if (!request.url().startsWith("http://localhost:3100"))
      externalRequests.push(request.url());
  });
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Bioquímica",
  );
  await page.screenshot({
    path: "test-results/home-desktop.png",
    fullPage: true,
    animations: "disabled",
  });
  await page.getByRole("button", { name: "Iniciar Quiz" }).click();
  const firstIds = await completeRound(page, 8);
  await expect(page.getByRole("heading", { name: "Muito bem!" })).toBeVisible();
  await expect(page.locator(".result-stats")).toContainText("80%");
  await page.getByRole("button", { name: "Revisar respostas" }).click();
  await expect(
    page.getByRole("heading", { name: "Revisão das respostas" }),
  ).toBeVisible();
  await page.locator("#revisao").getByRole("button").first().click();
  await expect(
    page.getByText("Resposta escolhida", { exact: true }),
  ).toBeVisible();
  await page.screenshot({
    path: "test-results/result-desktop.png",
    fullPage: true,
    animations: "disabled",
  });
  await page.getByRole("button", { name: "Refazer Quiz" }).click();
  const secondIds = await completeRound(page, 10);
  expect(secondIds.every((id) => !firstIds.includes(id))).toBe(true);
  await expect(
    page.getByRole("heading", { name: "Excelente! Você dominou este quiz." }),
  ).toBeVisible();
  expect(errors).toEqual([]);
  expect(externalRequests).toEqual([]);
});

test("category and count limits, mobile layout, and exit confirmation", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.screenshot({
    path: "test-results/home-mobile.png",
    fullPage: true,
    animations: "disabled",
  });
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  await page.getByRole("button", { name: "Aminoácidos", exact: true }).click();
  await expect(page.getByLabel("Número de questões")).toHaveValue("5");
  await expect(
    page.getByLabel("Número de questões").locator("option"),
  ).toHaveCount(1);
  await page.getByRole("button", { name: "Iniciar Quiz" }).click();
  await expect(page.locator("[data-slot=badge]")).toHaveText("Aminoácidos");
  await page.screenshot({
    path: "test-results/question-mobile.png",
    fullPage: true,
    animations: "disabled",
  });
  await page.getByRole("button", { name: "Voltar ao início" }).click();
  await page.getByRole("button", { name: "Continuar quiz" }).click();
  await expect(page.locator("#question-title")).toBeVisible();
  await completeRound(page, 0, 5);
  await expect(
    page.getByRole("heading", { name: "Continue estudando" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Escolher outro tema" }).click();
  await page.getByRole("button", { name: "Todas", exact: true }).click();
  await page.getByLabel("Número de questões").selectOption("20");
  await page.getByRole("button", { name: "Ver todos os 12 temas" }).click();
  await page
    .locator(".all-topics")
    .getByRole("button", { name: "Peptídeos" })
    .click();
  await expect(page.getByLabel("Número de questões")).toHaveValue("2");
  await page.getByRole("button", { name: "Iniciar Quiz" }).click();
  await completeRound(page, 1, 2);
  await expect(
    page.getByRole("heading", { name: "Bom progresso" }),
  ).toBeVisible();
});

test("layout fits small phones, tablets, and desktop", async ({ page }) => {
  for (const width of [320, 768, 1280]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    await page.getByRole("button", { name: "Iniciar Quiz" }).click();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
  }
});
