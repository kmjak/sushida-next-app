"use client"

import { scoreServices } from "@/lib/scores";
import { MissedAlphabet } from "@/shared/types/MissedAlphabets";
import { ScoreType } from "@/shared/types/ScoreType";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export const ResultsComponent = () => {
  const params = useParams();
  const scoreID = params.scoreID;
  const [score, setScore] = useState<ScoreType>();
  const { getAllScores } = scoreServices();

  useEffect(() => {
    const fetchScores = async () => {
      const scores = await getAllScores();
      const thisScore = scores.find((score: ScoreType) => score.scoreID === scoreID);
      setScore(thisScore);
    };
    fetchScores();
  }, [scoreID]);

  const getTopMissedAlphabets = (missedAlphabets: MissedAlphabet[], count: number) => {
    return missedAlphabets
      .sort((a, b) => b.counts - a.counts)
      .slice(0, count);
  };

  const topMissedAlphabets = score?.missedAlphabet ? getTopMissedAlphabets(score.missedAlphabet, 3) : [];

  return (
    <div className="px-36 py-10 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-8">結果</h1>
      <div className="space-y-4 text-center">
        <p className="text-lg">スコア: <span className="font-semibold">{score?.score}</span></p>
        <p className="text-lg">正解: <span className="font-semibold">{score?.correct}</span></p>
        <p className="text-lg">不正解: <span className="font-semibold">{score?.incorrect}</span></p>
        <p className="text-lg">正解率: <span className="font-semibold">{score?.accuracyRate}%</span></p>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">苦手なアルファベット</h2>
        {topMissedAlphabets.length > 0 ? (
          <ul className="space-y-2 list-disc list-inside">
            {topMissedAlphabets.map((missed) => (
              <li key={missed.alphabet} className="text-lg"><span className="text-red-500">{missed.alphabet}</span> <span className="ml-4 text-gray-500">({missed.counts}回)</span></li>
            ))}
          </ul>
        ) : (
          <p className="text-lg">パーフェクト!</p>
        )}
      </div>
    </div>
  );
}
