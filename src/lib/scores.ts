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
    const score = culcScore(correct,incorrect, accuracyRate);
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

  const culcScore = (correct: number, incorrect:number,accuracyRate:number) => {
    const correctScore = (correct * 1.8) - incorrect;
    const totalScore = (correctScore * (accuracyRate / 5)) / 10;
    return Math.floor(totalScore);
  }

  return {
    getAllScores,
    addScore,
  };
}