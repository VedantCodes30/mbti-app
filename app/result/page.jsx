"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import mbtiDescriptions from "../lib/mbtiDescriptions";

export default function ResultPage() {
  const [mbti, setMbti] = useState("");
  const router = useRouter();

  useEffect(() => {
    const rawAnswers = JSON.parse(sessionStorage.getItem("mbti-answers")) || [];

    if (rawAnswers.length === 0) {
      // No data, redirect back
      router.push("/");
      return;
    }

    // 1. Initialize vote counters
    const scores = {
      E: 0,
      I: 0,
      S: 0,
      N: 0,
      T: 0,
      F: 0,
      J: 0,
      P: 0,
    };

    // 2. Tally the answers
    for (const ans of rawAnswers) {
      if (ans.value) {
        scores[ans.trait] += 1; // Agree → support the trait
      } else {
        // Disagree → support the opposite
        const opposite = getOppositeTrait(ans.trait);
        scores[opposite] += 1;
      }
    }

    // 3. Construct MBTI result
    const result =
      (scores.E >= scores.I ? "E" : "I") +
      (scores.S >= scores.N ? "S" : "N") +
      (scores.T >= scores.F ? "T" : "F") +
      (scores.J >= scores.P ? "J" : "P");

    setMbti(result);
  }, [router]);

  const getOppositeTrait = (trait) => {
    const map = {
      E: "I",
      I: "E",
      S: "N",
      N: "S",
      T: "F",
      F: "T",
      J: "P",
      P: "J",
    };
    return map[trait];
  };

  return (
    <div>
      <h1>Your MBTI Type Is:</h1>
      <p>{mbti}</p>
      {mbti && (
        <p>{mbtiDescriptions[mbti] || "No Description found for this type."}</p>
      )}
      <button
        onClick={() => {
          sessionStorage.clear();
          router.push("/quiz");
        }}
      >
        Restart Quiz
      </button>
    </div>
  );
}
