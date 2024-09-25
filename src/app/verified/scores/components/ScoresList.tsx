import { ScoreType } from "@/shared/types/ScoreType"

import { FC } from "react";

interface ScoresListProps {
  myScores: ScoreType[];
}

export const ScoresListComponents: FC<ScoresListProps> = ({
  myScores
}) => {
  return (
    <>
      <div className="space-y-4 text-center">
        {myScores.map((score) => (
          <div key={score.scoreID} className="px-36 py-10 bg-gray-100 rounded-lg shadow-lg">
            <p className="text-lg">スコア: <span className="font-semibold">{score.score}</span></p>
            <p className="text-lg">正解: <span className="font-semibold">{score.correct}</span></p>
            <p className="text-lg">不正解: <span className="font-semibold">{score.incorrect}</span></p>
            <p className="text-lg">正解率: <span className="font-semibold">{score.accuracyRate}%</span></p>
          </div>
        ))}
      </div>
    </>
  )
}