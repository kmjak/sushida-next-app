import { WordType } from "@/shared/types/words";

interface TypingFormProps extends WordType {
  accuracyRate: number;
  wordIndex: number;
}

export const TypingFormComponent = ({
  word,
  id,
  alphabet,
  accuracyRate,
  wordIndex,
} : TypingFormProps ) => {

  const displayAlphabet = typeof alphabet === "string" ? alphabet : "";

  return (
    <div key={id} className="mt-5 text-2xl font-semibold flex flex-col items-center">
      <h3 className="text-center text-xl">{word}</h3>
      <div className="flex justify-center">
        {displayAlphabet.split("").map((char, index) => (
          <span
            key={index}
            className={`text-2xl font-semibold ${
              index < wordIndex ? "text-red-500" : "text-black"
            }`}
          >
            {char}
          </span>
        ))}
      </div>
      <p>正確率 / {accuracyRate}%</p>
    </div>
  );
};