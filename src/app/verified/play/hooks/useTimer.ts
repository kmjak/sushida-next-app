import { scoreServices } from "@/lib/scores";
import { TimeUp } from "@/shared/types/TimeUp";
import { useEffect, useRef, useState } from "react";

export const useTimer = () => {
  const [timeLeft, setTimeLeft] = useState<number>(90);
  const [barColor, setBarColor] = useState<string>("bg-blue-500");
  const maxTime = 90;
  const timerRef = useRef<number | null>(null);
  const progressBarWidth = (timeLeft / maxTime) * 100;
  useEffect(() => {
    setBarColor(timeLeft >= 60 ? "bg-blue-500" : timeLeft >= 30 ? "bg-yellow-500" : "bg-red-500");
  }, [timeLeft]);

  useEffect(() => {
    const startTime = Date.now();
    const updateTimer = () => {
      const elapsedTime = (Date.now() - startTime) / 1000;
      const newTimeLeft = Math.max(0, maxTime - elapsedTime);
      setTimeLeft(newTimeLeft);

      if (newTimeLeft > -1) {
        timerRef.current = requestAnimationFrame(updateTimer);
      }
    };

    timerRef.current = requestAnimationFrame(updateTimer);

    return () => {
      if (timerRef.current) {
        cancelAnimationFrame(timerRef.current);
      }
    };
  }, [maxTime, setTimeLeft, timerRef]);

  const handleTimeUp = async ({
    userUUID,
    accuracyRate,
    totalCorrect,
    totalIncorrect,
    missedAlphabet,
  } : TimeUp ) => {
    const { addScore } = scoreServices();
    if (userUUID !== undefined && timeLeft === 0) {
      const res = await addScore({
        userUUID,
        correct: totalCorrect,
        incorrect: totalIncorrect,
        missedAlphabet: missedAlphabet,
        accuracyRate: accuracyRate,
      });
      return res;
    }

  }
  return {
    timeLeft,
    progressBarWidth,
    barColor,
    handleTimeUp,
  };
}