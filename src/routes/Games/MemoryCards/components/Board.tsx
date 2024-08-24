import React from 'react';

interface Card {
  id: string;
  value: string;
  flipped: boolean;
  image: string;
}

type Props = {
  children: React.ReactNode;
  cards: Card[];
};

export default function Board({ children, cards }: Props) {
  return (
    <main className='game-board'>
      {/* {cards.map((card) => {
        return (
          <Card
            id={card.id}
            value={card.value}
            flipped={card.flipped}
            image={card.image}
            handleFlip={handleFlip}
          />
        );
      })} */}
    </main>
  );
}
