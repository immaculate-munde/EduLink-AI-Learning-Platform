import React, { useState, useEffect } from "react";
import { quizData } from "../data/quizData";
import { Leaderboard } from "../components/Leaderboard";

export function AdaptiveQuiz() {
  const [grade, setGrade] = useState<string | null>(null);
  const [subject, setSubject] = useState<string | null>(null);
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">(
    "easy"
  );
  const [score, setScore] = useState(0);

  // 🔥 Quiz streak
  const [quizStreak, setQuizStreak] = useState(0);

  // 📅 Daily streak
  const [dailyStreak, setDailyStreak] = useState(0);

  // 🏅 Badges
  const [badges, setBadges] = useState<string[]>([]);

  // 🏆 Leaderboard
  const [leaderboard, setLeaderboard] = useState<
    { name: string; score: number }[]
  >([]);

  // Load daily streak from localStorage
  useEffect(() => {
    const lastVisit = localStorage.getItem("lastVisit");
    const storedStreak = localStorage.getItem("dailyStreak");
    const today = new Date().toDateString();

    if (lastVisit === today) {
      setDailyStreak(storedStreak ? parseInt(storedStreak) : 0);
    } else {
      if (lastVisit) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        if (lastVisit === yesterday.toDateString()) {
          const newStreak = (storedStreak ? parseInt(storedStreak) : 0) + 1;
          setDailyStreak(newStreak);
          localStorage.setItem("dailyStreak", newStreak.toString());
        } else {
          setDailyStreak(1);
          localStorage.setItem("dailyStreak", "1");
        }
      } else {
        setDailyStreak(1);
        localStorage.setItem("dailyStreak", "1");
      }
      localStorage.setItem("lastVisit", today);
    }
  }, []);

  // -----------------------------
  //   QUIZ FLOW
  // -----------------------------
  if (!grade) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Choose Grade</h2>
        {Object.keys(quizData).map((g) => (
          <button
            key={g}
            onClick={() => setGrade(g)}
            className="px-4 py-2 bg-blue-600 text-white m-2 rounded-lg"
          >
            {g.replace("grade", "Grade ")}
          </button>
        ))}
      </div>
    );
  }

  if (grade && !subject) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Choose Subject</h2>
        {Object.keys(quizData[grade]).map((subj) => (
          <button
            key={subj}
            onClick={() => setSubject(subj)}
            className="px-4 py-2 bg-green-600 text-white m-2 rounded-lg"
          >
            {subj}
          </button>
        ))}
      </div>
    );
  }

  const pool = grade && subject ? quizData[grade][subject][difficulty] : [];
  const randomIndex = Math.floor(Math.random() * pool.length);
  const question = pool[randomIndex];

  const handleAnswer = (option: string) => {
    if (!question) return;

    if (option === question.correctAnswer) {
      setScore(score + 1);
      const newQuizStreak = quizStreak + 1;
      setQuizStreak(newQuizStreak);

      // Progress difficulty
      if (difficulty === "easy") setDifficulty("medium");
      else if (difficulty === "medium") setDifficulty("hard");

      // Unlock badges
      if (newQuizStreak === 5 && !badges.includes("🔥 Streak 5")) {
        setBadges([...badges, "🔥 Streak 5"]);
      }
      if (newQuizStreak === 10 && !badges.includes("🏅 Streak 10")) {
        setBadges([...badges, "🏅 Streak 10"]);
      }
      if (newQuizStreak === 20 && !badges.includes("👑 Master Streak 20")) {
        setBadges([...badges, "👑 Master Streak 20"]);
      }
    } else {
      setQuizStreak(0);
      if (difficulty === "hard") setDifficulty("medium");
      else if (difficulty === "medium") setDifficulty("easy");
    }
  };

  // 📊 Progress bar (based on quiz streak)
  const progress = Math.min((quizStreak / 20) * 100, 100);

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Adaptive Quiz Mode 🚀</h2>

      {/* Daily streak */}
      <div className="mb-4 p-3 bg-yellow-100 rounded-lg flex items-center gap-2">
        <span className="text-2xl">🔥</span>
        <span className="font-bold">Daily Streak: {dailyStreak} days</span>
      </div>

      {/* Score + Quiz Streak */}
      <div className="mb-4">
        <p>
          Difficulty: <b>{difficulty.toUpperCase()}</b>
        </p>
        <p>Score: {score}</p>
        <p>🔥 Quiz Streak: {quizStreak}</p>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-300 rounded-full h-3 mb-4">
        <div
          className="bg-green-500 h-3 rounded-full transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Badges */}
      {badges.length > 0 && (
        <div className="mb-4">
          <h3 className="font-bold">🏅 Earned Badges:</h3>
          <ul className="flex gap-2 mt-2 flex-wrap">
            {badges.map((badge, i) => (
              <li
                key={i}
                className="px-3 py-1 bg-yellow-200 rounded-lg text-sm font-semibold"
              >
                {badge}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Leaderboard (Reusable Component) */}
      <Leaderboard leaderboard={leaderboard} />

      {/* Question */}
      {question && (
        <div>
          <p className="mb-3">{question.question}</p>
          <div className="space-y-2">
            {question.options.map((opt) => (
              <button
                key={opt}
                onClick={() => handleAnswer(opt)}
                className="block w-full px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
