import React, { useState, useEffect } from 'react';
import useBoard from './useBoard';
import useScore from './useScore';
import Results from './Results';
import './QuickColor.scss';

function QuickColor() {
  const {
    colorGrid,
    text,
    countDown,
    nextRoundBtn,
    resultsBtn,
    checkMatch,

    triggerNextRound,
  } = useBoard();
  const { visualMemoryScore, spatialMemoryScore, attentionScore } = useScore();
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    console.log(
      `MAIN::: spatial: ${spatialMemoryScore}, visual: ${visualMemoryScore}, attention: ${attentionScore}`
    );
  }, [visualMemoryScore, spatialMemoryScore, attentionScore]);

  return showResults ? (
    <Results />
  ) : (
    <div className='quick-color-container'>
      <h1>{text}</h1>
      {nextRoundBtn && <button onClick={triggerNextRound}>Next Round</button>}
      {resultsBtn && (
        <button onClick={() => setShowResults(true)}>Show Results</button>
      )}
      <p>{countDown.toFixed(2)}</p>
      <div className='color-grid'>
        {colorGrid.map(({ id, color, isHidden }) => (
          <button
            key={id}
            className={`color-card ${isHidden ? 'color-card__hidden' : ''}`}
            style={{ backgroundColor: isHidden ? '#808080' : color }}
            onClick={() => checkMatch({ id, color, isHidden })}
          />
        ))}
      </div>
    </div>
  );
}

export default QuickColor;
