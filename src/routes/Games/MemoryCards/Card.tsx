import React from 'react';

interface Card {
  id: string;
  value: string;
  flipped: boolean;
  image: string;
}
type Props = {
  id: string;
  value: string;
  flipped: boolean;
  handleFlip: (card: Card) => void;
  image: string;
};

export default function Card({ id, value, flipped, handleFlip, image }: Props) {
  const cardImage = require(`./Assets/${image}`);
  return (
    <div
      key={id}
      className={`card card__${flipped ? 'flipped' : 'hidden'}`}
      onClick={() => handleFlip({ id, value, flipped, image })}
    >
      {flipped && <img src={cardImage} alt='game card' />}
    </div>
  );
}
