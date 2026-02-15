"use client";

import { useEffect } from "react";
import { Question } from "@/types/generalQuestions";
import { useQuiz } from "@/context/quizContext";
import QuestionCard from "@/components/cardQuiz/QuestionCard";


export default function QuizClient({ questions }: { questions: Question[] }) {
  const { setQuestions } = useQuiz();

  useEffect(() => {
    setQuestions(questions);
  }, [questions]);

  return <QuestionCard/>
}
