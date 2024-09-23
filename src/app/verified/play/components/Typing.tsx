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
  } = useTyping();

  return (
    <div className="flex flex-col items-center">
      <TimeComponent
        accuracyRate={accuracyRate}
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