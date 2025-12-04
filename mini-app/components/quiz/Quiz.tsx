'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { quizData } from '@/data/quiz';
import Results from './Results';
import { Share } from '@/components/share';
import { url } from '@/lib/metadata';

function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const question = quizData[current];

  const handleAnswer = (answer: string) => {
    if (answer === question.correct) setScore(score + 1);
    if (current + 1 < quizData.length) {
      setCurrent(current + 1);
    } else {
      setShowResults(true);
    }
  };

  if (showResults) return <Results score={score} total={quizData.length} />;

  const options = shuffle([...question.options]);

  return (
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto p-4">
      <h2 className="text-xl font-semibold">{question.question}</h2>
      <div className="flex flex-col gap-2">
        {options.map((opt) => (
          <Button key={opt} onClick={() => handleAnswer(opt)}>{opt}</Button>
        ))}
      </div>
    </div>
  );
}
