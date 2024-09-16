import { WordType } from "@/shared/types/words";
import { useEffect, useState, useCallback } from "react";

interface TypingFormProps extends WordType {
  incrementListIndex: () => void;
}

export const TypingFormComponent = ({ word, id, alphabet, incrementListIndex }: TypingFormProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [totalCorrect, setTotalCorrect] = useState<number>(0);
  const [totalIncorrect, setTotalIncorrect] = useState<number>(0);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    const key = e.key;
    const currentChar = alphabet[wordIndex];
    console.log(key, currentChar);
    if (key === currentChar) {
      setInputValue(prev => prev + key);
      setWordIndex(prev => prev + 1);
      setTotalCorrect(prev => prev + 1);
      if (wordIndex === alphabet.length - 1) {
        incrementListIndex();
        setInputValue("");
        setWordIndex(0);
      }
    }else{
      setTotalIncorrect(prev => prev + 1);
    }
  }, [wordIndex, incrementListIndex, alphabet]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div key={id} className="mt-5 text-2xl font-semibold flex flex-col items-center">
      <h3 className="text-center text-xl">{word}</h3>
      <small className="text-center text-lg">{alphabet}</small>
      <p className="text-base">Input: {inputValue}</p>
      <p className="text-base">Correct: {totalCorrect}</p>
      <p  className="text-base">Incorrect: {totalIncorrect}</p>
    </div>
  );
};