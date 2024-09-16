"use client"
import React, { useEffect, useState, useRef } from 'react';
import { Words } from '@/domain/word/words';
import { WordType } from '@/shared/types/words';
import { TimeComponent } from './Time';
import { TypingFormComponent } from './TypingForm';

export const TypingComponent = () => {
  const [shuffledWords, setShuffledWords] = useState<WordType[]>([]);
  const [timeLeft, setTimeLeft] = useState<number>(90);
  const [listIndex, setListIndex] = useState<number>(0);
  const maxTime = 90;
  const timerRef = useRef<number | null>(null);

  const shuffleArray = (array: WordType[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    const shuffled = shuffleArray(Words);
    setShuffledWords(shuffled);
  }, []);

  const incrementListIndex = () => {
    setListIndex(listIndex + 1);
  }

  if (shuffledWords.length === 0) {
    return <div>Loading...</div>;
  }


  return (
    <div className="flex flex-col items-center">
      <TimeComponent timerRef={timerRef} timeLeft={timeLeft} setTimeLeft={setTimeLeft} maxTime={maxTime} />
      <div>
        <TypingFormComponent {...shuffledWords[listIndex]} incrementListIndex={incrementListIndex}/>
      </div>
    </div>
  );
}