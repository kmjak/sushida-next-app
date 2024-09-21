"use client"
import { useTyping } from '../hooks/useTyping';
import { TimeComponent } from './Time';
import { TypingFormComponent } from './TypingForm';

export const TypingComponent = () => {

  const {
    shuffledWords,
    listIndex,
    totalCorrect,
    totalIncorrect,
    accuracyRate,
    wordIndex,
  } = useTyping();

  return (
    <div className="flex flex-col items-center">
      <TimeComponent/>
      <div>
        <TypingFormComponent
          {...shuffledWords[listIndex]}
          totalCorrect={totalCorrect}
          totalIncorrect={totalIncorrect}
          accuracyRate={accuracyRate}
          wordIndex={wordIndex}
        />
      </div>
    </div>
  );
}