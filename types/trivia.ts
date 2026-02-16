export interface Question {
  type: "multiple" | "boolean";
  difficulty: string;
  category: string;
  questions: string;
  options: string[];
  correctIndex: number;
}


