interface WeaknessAlphabetProps {
  alphabet: string;
  counts: number;
}

interface WeaknessAlphabetsComponentProps {
  weaknessAlphabets: WeaknessAlphabetProps[];
}

export const WeaknessAlphabetsComponent = ({
  weaknessAlphabets
} : WeaknessAlphabetsComponentProps ) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      {weaknessAlphabets.map((weaknessAlphabet) => (
        <div key={weaknessAlphabet.alphabet} className="w-2/5 px-36 hover:w-5/12 py-5 bg-gray-100 rounded-lg shadow-lg transition-all">
          <p className="text-lg">
            アルファベット: <span className="font-semibold">{weaknessAlphabet.alphabet}</span>
          </p>
          <p className="text-lg">
            回数: <span className="font-semibold">{weaknessAlphabet.counts}</span>
          </p>
        </div>
      ))}
    </div>
  );
};