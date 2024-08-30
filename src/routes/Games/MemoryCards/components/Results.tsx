import React from 'react';

type Props = {
  timeResult: () => number;
  score: number;
};

export default function Results({ timeResult, score }: Props) {
  return (
    <div>
      <h1>Time Result: {timeResult()} seconds</h1>
      <h1>Score: {score}</h1>
    </div>
  );
}
