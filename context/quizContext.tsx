"use client";
import { createContext, use, useContext, useState } from "react";
import { Question } from "@/types/generalQuestions";

type QuizState = {
  questions: Question[];
  currentIndex: number;
  answers: string[];
  setQuestions: (q: Question[]) => void;
  answerQuestion: (answer: string) => void;
  nextQuestion: () => void;
};

const QuizContext = createContext<QuizState | null>(null);

export function QuizProvider({ children }: { children: React.ReactNode }) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  function answerQuestion(answer: string) {
    setAnswers((prev) => {
      const copy = [...prev];
      copy[currentIndex] = answer;
      return copy;
    });
  }

  function nextQuestion() {
    setCurrentIndex((i) => i + 1);
  }

  return (
    <QuizContext.Provider
      value={{
        questions,
        currentIndex,
        answers,
        setQuestions,
        answerQuestion,
        nextQuestion,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (!context) throw new Error("QuizProvider missing");
  return context;
}
