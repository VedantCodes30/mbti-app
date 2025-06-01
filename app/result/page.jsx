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
      router.push("/");
      return;
    }

    // Debug: log the answers to verify they're correct
    console.log("Answers from session:", rawAnswers);

    // Count votes per trait
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

    for (const answer of rawAnswers) {
      if (!answer || !answer.trait) continue;

      const trait = answer.trait;
      if (answer.value === true) {
        scores[trait] += 1;
      } else {
        const opposite = getOppositeTrait(trait);
        scores[opposite] += 1;
      }
    }

    const finalType =
      (scores.E >= scores.I ? "E" : "I") +
      (scores.S >= scores.N ? "S" : "N") +
      (scores.T >= scores.F ? "T" : "F") +
      (scores.J >= scores.P ? "J" : "P");

    console.log("MBTI scores:", scores);
    console.log("Calculated MBTI:", finalType);

    setMbti(finalType);
  }, [router]);

  return (
    <section className="result-page">
      <div className="results">
        <div className="flex items-center justify-center flex-col gap-2">
          <h1 className="text-2xl font-semibold">Your MBTI Type Is:</h1>
          <p className="text-4xl text-gradient font-bold">{mbti}</p>
        </div>

        {mbti && (
          <p className="text-center text-sm mt-4">
            {mbtiDescriptions[mbti] || "No Description found for this type."}
          </p>
        )}

        <button
          className="mt-6 border border-gray-300 px-4 py-2 rounded hover:bg-gray-100"
          onClick={() => {
            sessionStorage.clear();
            router.push("/quiz");
          }}
        >
          Restart Quiz
        </button>
      </div>
    </section>
  );
}
