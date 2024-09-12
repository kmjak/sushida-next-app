"use client"
import React, { useEffect, useState, useRef } from 'react';
import { Words } from '../words';
import { WordType } from '@/types/words';
import { TimeComponent } from './Time';

export const TypingComponent = () => {
  const [shuffledWords, setShuffledWords] = useState<WordType[]>([]);
  const [timeLeft, setTimeLeft] = useState<number>(90);
  const [listIndex, setListIndex] = useState<number>(0);
  const [wordIndex, setWordIndex] = useState<number>(0);
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


  return (
    <div className="flex flex-col items-center">
      <TimeComponent timerRef={timerRef} timeLeft={timeLeft} setTimeLeft={setTimeLeft} maxTime={maxTime} />
      <div className="mt-5">
        <h2 className="text-2xl font-semibold flex flex-col items-center">
          {shuffledWords[listIndex]?.word}
          <small className="">{shuffledWords[listIndex]?.alphabet}</small>
        </h2>
      </div>
    </div>
  );
}