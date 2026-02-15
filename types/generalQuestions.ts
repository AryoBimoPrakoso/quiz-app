export interface Question {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

// export const sampleQuestionGeneral: Question = {
//   type: "multiple",
//   difficulty: "easy",
//   category: "General Knowledge",
//   question: "How many syllables make up a haiku?",
//   correct_answer: "17",
//   incorrect_answers: ["15", "10", "21"],
// };

// export type TriviaResponseGeneralQuestion = {
//   response_code: number;
//   results: Question[];
// };
