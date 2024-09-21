import { Words } from "@/domain/word/words";
import { WordType } from "@/shared/types/words";
import { useCallback, useEffect, useState } from "react";
import { processKeyDown } from "../usecase/processKeyDown";

export const useTyping = () => {
  const [shuffledWords, setShuffledWords] = useState<WordType[]>([]);
  const [listIndex, setListIndex] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>("");
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [totalCorrect, setTotalCorrect] = useState<number>(0);
  const [totalIncorrect, setTotalIncorrect] = useState<number>(0);
  const [accuracyRate, setAccuracyRate] = useState<number>(100);

  const shuffleArray = (array: WordType[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    const shuffled = shuffleArray(Words);
    setShuffledWords(shuffled);
  }, []);

  const handleKeyDown = useCallback((e:KeyboardEvent) => {
    processKeyDown({
      e,
      shuffledWords,
      listIndex,
      wordIndex,
      totalCorrect,
      totalIncorrect,
      setListIndex,
      setInputValue,
      setWordIndex,
      setTotalCorrect,
      setTotalIncorrect,
      setAccuracyRate,
    });
  }, [shuffledWords, listIndex, wordIndex, totalCorrect, totalIncorrect]);

  useEffect(() => {
    if(totalCorrect + totalIncorrect != 0) {
      setAccuracyRate(Number(((Math.round(totalCorrect / (totalCorrect + totalIncorrect) * 1000)) / 10).toFixed(1)));

    }
    document.addEventListener("keydown", handleKeyDown);
  return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown, totalCorrect, totalIncorrect]);

  return {
    shuffledWords,
    listIndex,
    inputValue,
    totalCorrect,
    totalIncorrect,
    accuracyRate,
    wordIndex,
  };
}