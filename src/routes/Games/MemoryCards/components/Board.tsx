import React from 'react';
import './Board.scss';

interface Card {
  id: string;
  value: string;
  flipped: boolean;
  image: string;
}
type Props = {
  cards: Card[];
  renderCard: (
    id: string,
    value: string,
    flipped: boolean,
    image: string
  ) => JSX.Element;
};

export default function Board({ cards, renderCard }: Props) {
  return (
    <main className='game-board'>
      {cards.map((card) =>
        renderCard(card.id, card.value, card.flipped, card.image)
      )}
    </main>
  );
}
