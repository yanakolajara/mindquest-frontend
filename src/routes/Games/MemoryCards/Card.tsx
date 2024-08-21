import React from 'react';

type Props = {
  id: number;
  value: string;
  flipped: boolean;
  handleFlip: (card: Card) => void;
};

interface Card {
  id: number;
  value: string;
  flipped: boolean;
}

export default function Card({ id, value, flipped, handleFlip }: Props) {
  let cardStyle = {
    border: '1px solid red',
    width: '100px',
    height: '100px',
    margin: '5px',
  };

  return (
    <div
      key={id}
      className={`card card__${flipped ? 'flipped' : 'hidden'}`}
      style={cardStyle}
      onClick={() => handleFlip({ id, value, flipped })}
    >
      {flipped ? value : 'X'}
    </div>
  );
}
