import React from 'react';
import Card from './Card';

interface Card {
  id: string;
  value: string;
  flipped: boolean;
  image: string;
}

type Props = {
  cards: Card[];
  handleFlip: (card: Card) => void;
};

export default function Board({ cards, handleFlip }: Props) {
  return (
    <main className='game-board'>
      {cards.map((card) => {
        return (
          <Card
            id={card.id}
            value={card.value}
            flipped={card.flipped}
            image={card.image}
            handleFlip={handleFlip}
          />
        );
      })}
    </main>
  );
}
