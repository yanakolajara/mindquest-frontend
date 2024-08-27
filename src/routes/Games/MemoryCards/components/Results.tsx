import React from 'react';

type Props = {
  timeResult: () => number;
};

export default function Results({ timeResult }: Props) {
  return (
    <div>
      <h1>Time Result: {timeResult()} seconds</h1>
    </div>
  );
}
