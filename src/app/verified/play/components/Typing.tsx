"use client"
import { useTyping } from '../hooks/useTyping';
import { TimeComponent } from './Time';
import { TypingFormComponent } from './TypingForm';

export const TypingComponent = () => {

  const {
    shuffledWords,
    listIndex,
    accuracyRate,
    wordIndex,
    totalIncorrect,
    totalCorrect,
    missedAlphabet,
  } = useTyping();

  return (
    <div className="flex flex-col items-center">
      <TimeComponent
        accuracyRate={accuracyRate}
        totalCorrect={totalCorrect}
        totalIncorrect={totalIncorrect}
        missedAlphabet={missedAlphabet}
      />
      <div>
        <TypingFormComponent
          {...shuffledWords[listIndex]}
          accuracyRate={accuracyRate}
          wordIndex={wordIndex}
        />
      </div>
    </div>
  );
}