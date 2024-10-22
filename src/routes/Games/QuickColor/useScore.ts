import { useState, useEffect, useCallback } from 'react';

interface ScoreState {
  visualMemoryScore: number;
  spatialMemoryScore: number;
  attentionScore: number;
}

let listeners: Array<(state: ScoreState) => void> = [];

const initialState: ScoreState = {
  visualMemoryScore: 0,
  spatialMemoryScore: 1000,
  attentionScore: 0,
};

let state = { ...initialState };

const setState = (newState: Partial<ScoreState>) => {
  state = { ...state, ...newState };
  listeners.forEach((listener) => listener(state));
};

const useScore = () => {
  const [localState, setLocalState] = useState(state);

  useEffect(() => {
    listeners.push(setLocalState);
    return () => {
      listeners = listeners.filter((listener) => listener !== setLocalState);
    };
  }, []);

  const wrongAttempt = useCallback(() => {
    setState({ spatialMemoryScore: state.spatialMemoryScore - 10 });
  }, []);

  const firstAttempt = useCallback(() => {
    setState({ visualMemoryScore: state.visualMemoryScore + 10 });
  }, []);

  const increaseAttention = useCallback(() => {
    setState({ attentionScore: state.attentionScore + 10 });
  }, []);

  useEffect(() => {
    console.log(
      `spatial: ${localState.spatialMemoryScore}, visual: ${localState.visualMemoryScore}, attention: ${localState.attentionScore}`
    );
  }, [localState]);

  return {
    ...localState,
    wrongAttempt,
    firstAttempt,
    increaseAttention,
  };
};

export default useScore;
