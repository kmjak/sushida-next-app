"use client"

import { useScores } from "@/hooks/useScores";
import { useRanking } from "../hooks/useRanking";
import { useEffect } from "react";

export const RankingComponent = () => {
  const { allScore } = useScores();
  const {
    top10Scores,
    setAllScore,
  } = useRanking();
  useEffect(() => {
    setAllScore(allScore);
  }, [allScore, setAllScore]);


  return (
    <div className="w-full max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <table className="min-w-full text-center table-auto">
        <thead className="bg-blue-900 text-white">
          <tr>
            <th className="px-4 py-3">Rank</th>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Score</th>
          </tr>
        </thead>
        <tbody className="bg-gray-100 divide-y divide-gray-200">
          {top10Scores.map((score, index) => (
            <tr key={score.userUUID} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="px-4 py-4 text-lg font-medium text-gray-900">{index + 1}位</td>
              <td className="px-4 py-4 text-lg text-gray-700">{score.name}</td>
              <td className="px-4 py-4 text-lg font-semibold text-green-600">{score.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};