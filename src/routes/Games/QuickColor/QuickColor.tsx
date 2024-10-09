import React from 'react';
import './QuickColor.scss';
type Props = {};

type colorCard = {
  id: number;
  color: string;
  isHidden: boolean;
};

const getRandomId = (): number => {
  return Math.floor(Math.random() * 1000000);
};

const generateColorGrid = (): colorCard[] => {
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
  const colorGrid = colors.map((color) => ({
    id: getRandomId(),
    color,
    isHidden: false,
  }));

  // Sort the array based on the random id to mix the colors
  return colorGrid.sort((a, b) => a.id - b.id);
};

function QuickColor({}: Props) {
  const [colorGrid, setColorGrid] = React.useState<colorCard[]>([]);
  const [text, setText] = React.useState<string>('Memorize the colors');
  const [timer, setTimer] = React.useState(5.0);

  //TODO: Display the grid to the user for a fixed time (e.g., 5 seconds). Use setTimeout to hide the colors after that period.

  React.useEffect(() => {
    setColorGrid(generateColorGrid());
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 0) {
          clearInterval(interval);
          return 0;
        }
        return Number((prevTimer - 0.01).toFixed(2));
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    if (timer <= 0) {
      setText("Time's up! Try to remember the colors");
      setColorGrid((prevGrid) =>
        prevGrid.map((card) => ({
          ...card,
          isHidden: true,
        }))
      );
    }
  }, [timer]);

  return (
    <div className='quick-color-container'>
      <h1>{text}</h1>
      <p>{timer}</p>
      <div className='color-grid'>
        {colorGrid.map((card) => (
          <div
            key={card.id}
            className='color-card'
            style={{ backgroundColor: card.isHidden ? '#808080' : card.color }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default QuickColor;
