import React from 'react';
import './QuickColor.scss';
type Props = {};

type colorCard = {
  id: number;
  color: string;
  isHidden: boolean;
};

function QuickColor({}: Props) {
  const [colorGrid, setColorGrid] = React.useState<colorCard[]>([
    { id: 1, color: 'red', isHidden: false },
    { id: 2, color: 'blue', isHidden: false },
    { id: 3, color: 'green', isHidden: false },
    { id: 4, color: 'yellow', isHidden: false },
    { id: 5, color: 'purple', isHidden: false },
    { id: 6, color: 'orange', isHidden: false },
    { id: 7, color: 'pink', isHidden: false },
    { id: 8, color: 'brown', isHidden: false },
    { id: 9, color: 'gray', isHidden: false },
  ]);
  const [text, setText] = React.useState<string>('Memorize the colors');

  return (
    <div className='quick-color-container'>
      <h1>{text}</h1>
      <div className='color-grid'>
        {colorGrid.map((card) => (
          <div
            key={card.id}
            className='color-card'
            style={{ backgroundColor: card.color }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default QuickColor;
