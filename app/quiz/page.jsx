"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTransitionRouter } from "next-view-transitions";
import questions from "../lib/questions";

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const router = useTransitionRouter();

  //Load from session storage
  useEffect(() => {
    const savedAnswers =
      JSON.parse(sessionStorage.getItem("mbti-answers")) || [];
    const savedIndex = parseInt(sessionStorage.getItem("mbti-current")) || 0;
    setAnswers(savedAnswers);
    setCurrent(savedIndex);
  }, []);

  // Save to Session Storage
  useEffect(() => {
    sessionStorage.setItem("mbti-answers", JSON.stringify(answers));
    sessionStorage.setItem("mbti-current", current.toString());
  }, [answers, current]);

  //Handle Answers
  const handleAnswers = (agrees) => {
    const newAnswer = {
      trait: questions[current].trait,
      value: agrees,
    };

    const updatedAnswers = [...answers];
    updatedAnswers[current] = newAnswer; // Use index to avoid duplicates

    setAnswers(updatedAnswers);

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      router.push("/result");
    }
  };

  const q = questions[current];
  return (
    <section className="quiz-section">
      <div className="quiz">
        <h2>
          Question {current + 1} of {questions.length}
        </h2>
        <p>{q.text}</p>
        <div className="flex gap-8 items-center justify-center">
          <button onClick={() => handleAnswers(true)}>Agree</button>
          <button onClick={() => handleAnswers(false)}>Disagree</button>
        </div>
      </div>
    </section>
  );
}
