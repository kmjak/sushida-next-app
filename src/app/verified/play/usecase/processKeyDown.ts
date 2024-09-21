import { WordType } from "@/shared/types/words";

interface ProcessKeyDownProps {
  e: KeyboardEvent;
  shuffledWords: WordType[];
  listIndex: number;
  wordIndex: number;
  totalCorrect: number;
  totalIncorrect: number;
  setListIndex: (index: number) => void;
  setInputValue: (update: (prev: string) => string) => void;
  setWordIndex: (index: number) => void;
  setTotalCorrect: (update: (prev: number) => number) => void;
  setTotalIncorrect: (update: (prev: number) => number) => void;
  setAccuracyRate: (number:number) => void;
}

export const processKeyDown = ({
  e,
  shuffledWords,
  listIndex,
  wordIndex,
  setListIndex,
  setInputValue,
  setWordIndex,
  setTotalCorrect,
  setTotalIncorrect,
} : ProcessKeyDownProps ) => {
  const key = e.key;
  const currentChar = shuffledWords[listIndex]?.alphabet[wordIndex];
  if (key === currentChar) {
    setInputValue((prev:string) => prev + key);
    setWordIndex(wordIndex + 1);
    setTotalCorrect((prev: number) => prev + 1);
    if (wordIndex === shuffledWords[listIndex]?.alphabet.length - 1) {
      setListIndex(listIndex + 1);
      setInputValue(() => "");
      setWordIndex(0);
    }
  } else {
    setTotalIncorrect(prev => prev + 1);
  }
}