import he from "he";
import { Question } from "@/types/generalQuestions";

export async function getGeneralQuestion(): Promise<Question[]> {
  const res = await fetch(
    "https://opentdb.com/api.php?amount=10&category=9&type=multiple",
    { cache: "no-store" },
  );
  if (!res.ok) throw new Error("Failed fetching general question");

  const data = await res.json();

  const cleaned: Question[] = data.results.map((q: Question) => ({
    ...q,
    question: he.decode(q.question),
    correct_answer: he.decode(q.correct_answer),
    incorrect_answers: q.incorrect_answers.map(ans => he.decode(ans)),
  }))

  return cleaned;
}
