import React from 'react';
import useScore from './useScore';

type Props = {};

export default function Results({}: Props) {
  const { visualMemoryScore, spatialMemoryScore, attentionScore } = useScore();
  return (
    <div>
      <h1>Results</h1>
      <h1>Visual Memory Score: {visualMemoryScore}</h1>
      <h1>Spatial Memory Score: {spatialMemoryScore}</h1>
      <h1>Attention Score: {attentionScore}</h1>
    </div>
  );
}
