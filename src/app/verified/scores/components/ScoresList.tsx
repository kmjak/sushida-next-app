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
      <div className="space-y-4 w-full">
        {myScores.map((score) => (
          <div key={score.scoreID} className="w-2/5 px-36 hover:w-5/12 py-5 bg-gray-100 rounded-lg shadow-lg mx-auto">
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