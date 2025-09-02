import React from "react";

type LeaderboardEntry = {
  name: string;
  score: number;
};

type LeaderboardProps = {
  leaderboard: LeaderboardEntry[];
};

export function Leaderboard({ leaderboard }: LeaderboardProps) {
  return (
    <div className="mb-4">
      <h3 className="font-bold">🏆 Leaderboard</h3>
      {leaderboard.length === 0 ? (
        <p className="text-gray-500 text-sm mt-2">No scores yet.</p>
      ) : (
        <ul className="mt-2 space-y-1">
          {leaderboard.map((entry, i) => (
            <li
              key={i}
              className="flex justify-between bg-gray-100 px-3 py-1 rounded"
            >
              <span>
                {i + 1}. {entry.name}
              </span>
              <span>{entry.score}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
