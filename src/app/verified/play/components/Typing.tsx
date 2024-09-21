"use client"
import { useTyping } from '../hooks/useTyping';
import { TimeComponent } from './Time';
import { TypingFormComponent } from './TypingForm';

export const TypingComponent = () => {

  const {
    shuffledWords,
    listIndex,
    inputValue,
    totalCorrect,
    totalIncorrect,
  } = useTyping();

  return (
    <div className="flex flex-col items-center">
      <TimeComponent/>
      <div>
        <TypingFormComponent
          {...shuffledWords[listIndex]}
          inputValue={inputValue}
          totalCorrect={totalCorrect}
          totalIncorrect={totalIncorrect}
        />
      </div>
    </div>
  );
}