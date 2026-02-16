import { getGeneralQuestion } from "@/lib/generalQuestions";
import QuizClient from "./QuizClient";
import OptionQuiz from "@/components/optionQuiz/OptionQuiz";


export default async function QuizPage() {
  const questions = await getGeneralQuestion();
  return (
    <div className="h-screen flex justify-center items-center">
      <QuizClient questions={questions} />
      <OptionQuiz/>
    </div>
  );
}
