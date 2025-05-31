"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import questions from "../lib/questions";

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const router = useRouter();

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

    //Updated Answers
    const updatedAnswers = [...answers, newAnswer];
    setAnswers(updatedAnswers);

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      router.push("/result");
    }
  };

  const q = questions[current];
  return (
    <div>
      <h2>
        Question {current + 1} of {questions.length}
      </h2>
      <p>{q.text}</p>
      <div>
        <button onClick={() => handleAnswers(true)}>Agree</button>
        <button onClick={() => handleAnswers(false)}>Disagree</button>
      </div>
    </div>
  );
}
