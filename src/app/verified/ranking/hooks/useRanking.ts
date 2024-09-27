import { userServices } from "@/lib/users";
import { ScoreType } from "@/shared/types/ScoreType";
import { UserType } from "@/shared/types/Usertype";
import { useEffect, useState } from "react";

export const useRanking = () => {
  const [top10Scores, setTop10Scores] = useState<{ userUUID: string; name: string; score: number }[]>([]);
  const [allScore, setAllScore] = useState<ScoreType[]>([]);

  useEffect(() => {
    const fetchTop10Scores = async () => {
      const { getAllUsers } = userServices();
      const allUser = await getAllUsers();
      const sortedScores = [...allScore].sort((a, b) => b.score! - a.score!);
      const usedUser: string[] = [];
      const topScores: { userUUID: string; name: string; score: number }[] = [];

      let i = 0;
      let scoreIndex = 0;
      while (i < 10 && scoreIndex < sortedScores.length) {
        const uuid = sortedScores[scoreIndex].userUUID;
        if (!usedUser.includes(uuid)) {
          const user = allUser.find((user: UserType) => user.uuid === uuid);
          if (user) {
            topScores.push({ userUUID: user.uuid, name: user.name, score: sortedScores[scoreIndex].score! });
            usedUser.push(uuid);
            i++;
          }
        }
        scoreIndex++;
      }
      setTop10Scores(topScores);
    };
    fetchTop10Scores();
  }, [allScore]);

  return {
    top10Scores,
    setAllScore,
  };
}