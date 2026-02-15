import { useQuiz } from "@/context/quizContext";
import React from "react";

export default function QuestionCard() {
  const { questions, currentIndex, answerQuestion, nextQuestion } = useQuiz();
  return (
    <div className="w-4/5 p-14 rounded-xl bg-white-/50 shadow-lg">
      {questions.map((q, i) => (
        <div key={i}>
          <h1>{q.question}</h1>
        </div>
      ))}
      
    </div>
  );
}
