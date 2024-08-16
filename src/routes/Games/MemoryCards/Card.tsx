import React from 'react';

// type Props = {
//   id: number;
//   value: string;
//   isFlipped: boolean;
// };

export default function Card({
  id,
  value,
  isFlipped,
  setSelected,
  selected,
  isMatched,
}: {
  id: number;
  value: string;
  isFlipped: boolean;
  setSelected: any;
  selected: any;
  isMatched: boolean;
}) {
  const cardStyle = {
    border: '1px solid red',
    width: '100px',
    height: '100px',
    margin: '5px',
  };

  const cardClassName = `card ${isFlipped ? 'flipped' : ''} ${
    isMatched ? 'matched' : ''
  }`;

  return (
    <div style={cardStyle} className={cardClassName}>
      <button
        onClick={() => setSelected([...selected, { id, value }])}
        type='button'
      >
        <p>{value}</p>
      </button>
      <p>test</p>
    </div>
  );
}
