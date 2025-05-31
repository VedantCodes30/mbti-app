"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const startQuiz = () => {
    sessionStorage.clear();
    router.push("/quiz");
  };
  return (
    <section className="home-section">
      <div className="home">
        <h1>Take the MBTI Flashcard Quiz and Discover Your Personality Type</h1>
        <p>
          Answer simple flashcard-style questions and unlock your MBTI type —
          fast, fun, and insightful.
        </p>
        <button onClick={startQuiz}>Start Quiz</button>
      </div>
    </section>
  );
}
