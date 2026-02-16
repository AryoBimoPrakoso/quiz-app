import he from "he";
import { Question } from "@/types/Questions";

function shufffle<T>(array: T[]): T[] {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

export async function getGeneralQuestion(): Promise<Question[]> {
  const res = await fetch(
    "https://opentdb.com/api.php?amount=10&category=9&type=multiple",
    { cache: "no-store" },
  );
  if (!res.ok) throw new Error("Failed fetching general question");

  const data = await res.json();

  const questions: Question[] = data.results.map((q: any) => {
    const correct = he.decode(q.correct_answer);
    const incorrect = q.incorrect_answers.map((a: string) => he.decode(a));

    const options = shufffle([correct, ...incorrect]);

    const correctIndex = options.indexOf(correct);

    return {
      type: q.type,
      difficulty: q.difficulty,
      category: q.category,
      question: he.decode(q.question),
      options,
      correctIndex,
    }
  })

  return questions;
}
