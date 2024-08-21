import React from 'react';

interface Card {
  id: number;
  value: string;
  flipped: boolean;
}
type Props = {
  id: number;
  value: string;
  flipped: boolean;
  handleFlip: (card: Card) => void;
};

export default function Card({ id, value, flipped, handleFlip }: Props) {
  return (
    <div
      key={id}
      className={`card card__${flipped ? 'flipped' : 'hidden'}`}
      onClick={() => handleFlip({ id, value, flipped })}
    >
      {flipped ? value : ''}
    </div>
  );
}
