import { ScoreType } from "@/shared/types/ScoreType";
import { v4 as uuidv4 } from 'uuid';

const SCORES_JSON_URL = process.env.NEXT_PUBLIC_SCORES_JSON_SERVER!;

export const scoreServices = () => {
  const getAllScores = async () => {
    const res = await fetch(`${SCORES_JSON_URL}`);
    const data = await res.json();
    return data;
  }

  const addScore = async ({
    userUUID,
    correct,
    incorrect,
    missedAlphabet,
    accuracyRate
  } : ScoreType ) : Promise<string> => {
    const scoreID = uuidv4();
    const score = calcScore(correct,incorrect, accuracyRate);
    await fetch(`${SCORES_JSON_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        scoreID,
        userUUID,
        score,
        correct,
        incorrect,
        missedAlphabet,
        accuracyRate,
      }),
    });
    return scoreID
  }

  const calcScore = (correct: number, incorrect:number,accuracyRate:number) => {
    const correctScore = (correct * 2.1) - incorrect;
    const totalScore = (correctScore * (accuracyRate * 1.4)) / 60;
    return Math.floor(totalScore);
  }

  return {
    getAllScores,
    addScore,
  };
}