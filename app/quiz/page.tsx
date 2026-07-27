import type { Metadata } from "next";
import QuizExperience from "./QuizExperience";
import "./quiz.css";

export const metadata: Metadata = {
  title: "Find Your After-2AM Type | ViceLab",
  description: "Answer eight questions to discover the role you play when the night gets strange.",
};

export default function QuizPage() {
  return <QuizExperience />;
}
