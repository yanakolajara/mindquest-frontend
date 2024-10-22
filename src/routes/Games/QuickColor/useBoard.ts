import { useEffect, useState } from 'react';
import useScore from './useScore';
import useStopwatch from './useStopwatch';

type ColorCard = {
  id: number;
  color: string;
  isHidden: boolean;
};
const colors = [
  'red',
  'blue',
  'green',
  'yellow',
  'purple',
  'orange',
  'pink',
  'brown',
  'black',
];

const useBoard = () => {
  const [text, setText] = useState('Memorize the colors');
  const [colorGrid, setColorGrid] = useState<ColorCard[]>([]);
  const [countDown, setCountDown] = useState(5.0);
  const [nextRoundBtn, setNextRoundBtn] = useState(false);
  const [resultsBtn, setResultsBtn] = useState(false);
  const [rounds, setRounds] = useState({
    currentRound: 1,
    totalRounds: 10,
  });
  const [selectedColor, setSelectedColor] = useState<ColorCard>({
    id: 0,
    color: '',
    isHidden: true,
  });
  const { wrongAttempt, firstAttempt, increaseAttention } = useScore();
  const { stopwatch, startStopwatch, stopStopwatch } = useStopwatch();

  const checkMatch = (clickedCard: ColorCard) => {
    if (
      !clickedCard.isHidden ||
      !colorGrid.find((card) => card.id === selectedColor.id)?.isHidden
    ) {
      return;
    } else if (clickedCard.color === selectedColor.color) {
      stopStopwatch();
      setText('Correct!');
      if (rounds.currentRound === rounds.totalRounds) {
        setResultsBtn(true);
      } else {
        setNextRoundBtn(true);
      }
      if (colorGrid.filter((card) => !card.isHidden).length === 0) {
        firstAttempt();
        if (stopwatch < 5000) {
          increaseAttention();
        }
      }
    } else {
      wrongAttempt();
    }

    setColorGrid((prevGrid) =>
      prevGrid.map((card) => {
        if (card.id === clickedCard.id) {
          return { ...card, isHidden: false };
        }
        return card;
      })
    );
  };

  const generateColorGrid = () => {
    const test = colors
      .map((color) => ({
        id: Math.random(),
        color,
        isHidden: false,
      }))
      .sort((a, b) => a.id - b.id);
    setColorGrid(test);
    setSelectedColor(test[Math.floor(Math.random() * test.length)]);
    setText('Memorize the colors');
    setNextRoundBtn(false);
  };

  const triggerNextRound = () => {
    if (rounds.currentRound < rounds.totalRounds) {
      setRounds({ ...rounds, currentRound: rounds.currentRound + 1 });
      setCountDown(5);
      generateColorGrid();
    }
  };

  useEffect(() => {
    generateColorGrid();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown((prevTimer) => {
        if (prevTimer <= 0) {
          clearInterval(interval);
          startStopwatch();
          setText(`Time's up! Where was the color ${selectedColor?.color}?`);
          setColorGrid((prevGrid) =>
            prevGrid.map((card) => ({ ...card, isHidden: true }))
          );
          return 0;
        }
        return Number((prevTimer - 0.01).toFixed(2));
      });
    }, 10);

    return () => clearInterval(interval);
  }, [selectedColor]);

  return {
    colorGrid,
    text,
    countDown,
    nextRoundBtn,
    resultsBtn,
    checkMatch,
    triggerNextRound,
  };
};
export default useBoard;
