"use client";
import { createContext, use, useContext, useState } from "react";
import { Question } from "@/types/Questions";

type QuizState = {
  questions: Question[];
  currentIndex: number;
  answers: string[];
  setQuestions: (q: Question[]) => void;
  answerQuestion: (index: number, answer: string) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
};

const QuizContext = createContext<QuizState | null>(null);

export function QuizProvider({ children }: { children: React.ReactNode }) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [answers, setAnswers] = useState<string[]>([]);


  function answerQuestion(index: number, answer: string) {
    setAnswers((prev) => {
      const copy = [...prev];
      copy[index] = answer;
      return copy;
    });
  }

  function nextQuestion() {
    setCurrentIndex((i) => i + 1);
  }

  function prevQuestion() {
    setCurrentIndex((i) => i - 1)
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
        prevQuestion,
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
