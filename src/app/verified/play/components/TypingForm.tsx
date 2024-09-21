import { WordType } from "@/shared/types/words";

interface TypingFormProps extends WordType {
  inputValue: string;
  totalCorrect: number;
  totalIncorrect: number;
}

export const TypingFormComponent = ({
  word,
  id,
  alphabet,
  inputValue,
  totalCorrect,
  totalIncorrect
} : TypingFormProps ) => {


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