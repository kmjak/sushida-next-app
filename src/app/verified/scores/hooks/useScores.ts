import { ScoreType } from "@/shared/types/ScoreType";
import { useEffect, useState } from "react";
import { useJWT } from "../../play/hooks/useJWT";
import { scoreServices } from "@/lib/scores";

export const useScores = () => {
  const [viewMode, setViewMode] = useState<string>("all");
  const [userUUID, setUserUUID] = useState<string | null>(null);
  const [myScores, setMyScores] = useState<ScoreType[]>([]);
  const [top3Scores, setTop3Scores] = useState<ScoreType[]>([]);
  const [weaknessAlphabets, setWeaknessAlphabets] = useState<{counts: number, alphabet: string}[]>([]);
  const { handleGetJWT } = useJWT();

  useEffect(() => {
    const fetchUserUUID = async () => {
      const userUUID = await handleGetJWT();
      if (userUUID == null) {
        return;
      }
      setUserUUID(userUUID);
    };
    fetchUserUUID();
  }, [handleGetJWT]);

  useEffect(() => {
    const fetchScores = async () => {
      const { getAllScores } = scoreServices();
      const scores = await getAllScores();
      const userScores = scores.filter((score: ScoreType) => score.userUUID === userUUID);
      setMyScores(userScores);

      const sortedScores = [...userScores].sort((a, b) => b.score - a.score);
      setTop3Scores(sortedScores.slice(0, 3));

      const recentScores = userScores.slice(-5);

      const alphabetCounts: { [key: string]: number } = {};
      recentScores.forEach((score:ScoreType) => {
        score.missedAlphabet.forEach(missed => {
          if (alphabetCounts[missed.alphabet]) {
            alphabetCounts[missed.alphabet] += missed.counts;
          } else {
            alphabetCounts[missed.alphabet] = missed.counts;
          }
        });
      });

      const weaknessAlphabetsArray = Object.entries(alphabetCounts)
        .map(([alphabet, counts]) => ({ alphabet, counts }))
        .sort((a, b) => b.counts - a.counts);

      setWeaknessAlphabets(weaknessAlphabetsArray);
      console.log(weaknessAlphabetsArray);
    }

    if (userUUID) {
      fetchScores();
    }
  }, [userUUID]);

  return {
    viewMode,
    setViewMode,
    myScores,
    top3Scores,
    weaknessAlphabets,
  };
};