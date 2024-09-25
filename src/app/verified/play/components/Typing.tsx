"use client"
import { useState, useEffect } from 'react';
import { useTyping } from '../hooks/useTyping';
import { TimeComponent } from './Time';
import { TypingFormComponent } from './TypingForm';

export const TypingComponent = () => {
  const [countdown, setCountdown] = useState<number>(3);
  const [isCountdownFinished, setIsCountdownFinished] = useState<boolean>(false);

  const {
    shuffledWords,
    listIndex,
    accuracyRate,
    wordIndex,
    totalIncorrect,
    totalCorrect,
    missedAlphabet,
    startTyping,
  } = useTyping();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount === 1) {
          clearInterval(timer);
          setIsCountdownFinished(true);
          startTyping();
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [startTyping]);

  return (
    <div className="flex flex-col items-center">
      {!isCountdownFinished ? (
        <div className="my-12 text-5xl">{countdown}</div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}