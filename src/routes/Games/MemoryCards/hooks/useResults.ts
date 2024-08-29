import React from 'react';

const useResults = () => {
  const [score, setScore] = React.useState<number>(0);

  const [isScoreReady, setIsScoreReady] = React.useState(false);

  const addMatchPoints = (isMatch: boolean) => {
    console.log('addMatchPoints: ' + score);
    setScore(score + 5);
  };

  const addCompletionPoints = () => {
    // setScore(score + 200)
  };

  const addTimePoints = (timerResult: number) => {
    setIsScoreReady(true);
  };

  const getScore = (): number => score;

  React.useEffect(() => {
    console.log('score: ' + score);
  }, [score]);

  return {
    addMatchPoints,
    addCompletionPoints,
    addTimePoints,
    isScoreReady,
    getScore,
    score,
  };
};

export { useResults };
