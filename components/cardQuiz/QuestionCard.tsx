import { useQuiz } from "@/context/quizContext";
import React from "react";
import { BarLoader } from "react-spinners";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function QuestionCard() {
  const {
    questions,
    currentIndex,
    answerQuestion,
    nextQuestion,
    prevQuestion,
    answers,
  } = useQuiz();
  const q = questions[currentIndex];

  if (!q) {
    return <BarLoader />;
  }
  return (
    <section className="w-4/5 flex flex-col gap-4 items-center">
      <div className="p-14 w-full flex flex-col gap-4 rounded-xl bg-white-/50 shadow-lg">
        <div className="flex gap-2 font-semibold">
          <h2>{currentIndex}.</h2>
          <h1>{q.question}</h1>
        </div>
        <div className="flex flex-col gap-2">
          {q.options.map((op, i) => {
            const isSelected = answers[currentIndex] === op;
            return (
              <div key={i} className="flex gap-2 items-center">
                <input
                  type="radio"
                  id={`opt-${i}`}
                  name={`question-${currentIndex}`}
                  value={op}
                  checked={isSelected}
                  onChange={() => answerQuestion(currentIndex, op)}
                />
                <label htmlFor={`opt-${i}`}>{op}</label>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex w-full justify-between">
        <button
          onClick={prevQuestion}
          className="w-max gap-1 py-2 px-4 flex rounded-xl bg-white-/50 shadow-md cursor-pointer"
        >
          <ArrowLeft /> Prev
        </button>
        <button
          onClick={nextQuestion}
          className="w-max gap-1 py-2 px-4 flex rounded-xl bg-white-/50 shadow-md cursor-pointer"
        >
          Next <ArrowRight />
        </button>
      </div>
    </section>
  );
}
