"use client";
import { useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  FlaskConical,
  GraduationCap,
  Heart,
  X,
} from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { filterQuestions } from "@/src/data/questions";
import { createQuiz } from "@/src/lib/shuffle";
import type { Question, QuizAnswer, QuizStatus } from "@/src/types/quiz";
import { QuizStart } from "./quiz-start";
import { QuizProgress } from "./quiz-progress";
import { QuizQuestion } from "./quiz-question";
import { QuizResult } from "./quiz-result";

export function Quiz() {
  const [status, setStatus] = useState<QuizStatus>("idle");
  const [category, setCategory] = useState("Todas");
  const [count, setCount] = useState(10);
  const [session, setSession] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState("");
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [confirmExit, setConfirmExit] = useState(false);
  const answerLock = useRef(false);
  const nextLock = useRef(false);
  const mainRef = useRef<HTMLElement>(null);
  const score = answers.filter((a) => a.isCorrect).length;
  const current = session[currentIndex];
  const currentAnswer = answers.find((a) => a.questionId === current?.id);

  function moveToTop() {
    window.scrollTo({ top: 0, behavior: "instant" });
    requestAnimationFrame(() =>
      mainRef.current?.focus({ preventScroll: true }),
    );
  }
  function start() {
    setSession(
      createQuiz(
        filterQuestions(category),
        count,
        session.map((q) => q.id),
      ),
    );
    setCurrentIndex(0);
    setSelectedOptionId("");
    setAnswers([]);
    answerLock.current = false;
    nextLock.current = false;
    setStatus("playing");
    setConfirmExit(false);
    moveToTop();
  }
  function confirm() {
    if (!current || !selectedOptionId || currentAnswer || answerLock.current)
      return;
    if (!current.options.some((o) => o.id === selectedOptionId)) return;
    answerLock.current = true;
    nextLock.current = false;
    setAnswers((previous) => [
      ...previous,
      {
        questionId: current.id,
        selectedOptionId,
        correctOptionId: current.correctOptionId,
        isCorrect: selectedOptionId === current.correctOptionId,
      },
    ]);
  }
  function next() {
    if (!currentAnswer || nextLock.current) return;
    nextLock.current = true;
    if (currentIndex === session.length - 1) setStatus("finished");
    else {
      setCurrentIndex((index) => index + 1);
      setSelectedOptionId("");
      answerLock.current = false;
    }
    moveToTop();
  }
  function home() {
    setStatus("idle");
    setConfirmExit(false);
    moveToTop();
  }

  return (
    <div className="site-shell">
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <header className="site-header">
        <div className="page-container header-inner">
          <a
            href="#inicio"
            className="brand"
            aria-label="BioQuiz, início"
            onClick={(event) => {
              if (status !== "idle") {
                event.preventDefault();
                if (status === "playing") setConfirmExit(true);
                else home();
              }
            }}
          >
            <span className="brand-icon">
              <FlaskConical size={23} strokeWidth={1.8} />
            </span>
            <span>
              Bio<span>Quiz</span>
              <small>Bioquímica aplicada à Farmácia</small>
            </span>
          </a>
          {status === "idle" ? (
            <nav aria-label="Navegação principal">
              <a href="#inicio" className="active">
                Início
              </a>
              <a href="#temas">Temas</a>
              <a href="#como-funciona">
                Como funciona <ArrowUpRight size={12} />
              </a>
            </nav>
          ) : (
            <span className="header-session">
              {status === "playing"
                ? `Questão ${currentIndex + 1} de ${session.length}`
                : "Sua sessão de estudos"}
            </span>
          )}
          <span className="header-student">
            <GraduationCap size={16} /> Espaço do estudante
          </span>
        </div>
      </header>
      <main
        id="conteudo"
        ref={mainRef}
        tabIndex={-1}
        className="flex-1 outline-none"
      >
        {status === "idle" ? (
          <QuizStart
            category={category}
            onCategoryChange={setCategory}
            count={count}
            onCountChange={setCount}
            onStart={start}
          />
        ) : (
          <div className="quiz-container">
            <div className="mb-7 flex items-center justify-between gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() =>
                  status === "playing" ? setConfirmExit(true) : home()
                }
              >
                <ArrowLeft />
                {status === "playing" ? "Voltar ao início" : "Início"}
              </Button>
              <span className="text-xs text-muted-foreground">
                {category === "Todas" ? "Revisão geral" : category}
              </span>
            </div>
            {confirmExit && (
              <div className="exit-confirm mb-6" role="alert">
                <div>
                  <strong>Encerrar esta tentativa?</strong>
                  <p>As respostas desta sessão serão descartadas.</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setConfirmExit(false)}
                  >
                    Continuar quiz
                  </Button>
                  <Button size="sm" onClick={home}>
                    Sair
                    <X />
                  </Button>
                </div>
              </div>
            )}
            {status === "playing" && current ? (
              <>
                <QuizProgress
                  current={currentIndex + 1}
                  total={session.length}
                  score={score}
                />
                <QuizQuestion
                  key={current.id}
                  question={current}
                  selectedOptionId={selectedOptionId}
                  answer={currentAnswer}
                  isLast={currentIndex === session.length - 1}
                  onSelect={(id) => {
                    if (!answerLock.current) setSelectedOptionId(id);
                  }}
                  onConfirm={confirm}
                  onNext={next}
                />
                <p className="quiz-encouragement">
                  <Heart size={14} /> Não precisa saber tudo. Você está aqui
                  para aprender.
                </p>
              </>
            ) : (
              <QuizResult
                questions={session}
                answers={answers}
                onRestart={start}
                onHome={home}
              />
            )}
          </div>
        )}
      </main>
      <footer className="site-footer">
        <div className="page-container">
          <span className="footer-brand">
            <FlaskConical size={17} />
            BioQuiz
          </span>
          <p>Material de apoio para estudos de Bioquímica</p>
          <span>
            Feito para mentes curiosas <span className="text-primary">↗</span>
          </span>
        </div>
      </footer>
    </div>
  );
}
