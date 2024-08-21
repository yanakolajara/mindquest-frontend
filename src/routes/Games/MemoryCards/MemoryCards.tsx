import React, { useState } from 'react';
import Card from './Card';
import { useCards } from './useCards';
import './MemoryCards.scss';

interface Card {
  id: number;
  value: string;
  flipped: boolean;
}

const MemoryGame = () => {
  const { cards, selectedCards, handleFlip, handleMatch } = useCards();

  return (
    <div className='game-screen'>
      <div className='game-board'>
        {cards.map((card) => (
          <Card
            id={card.id}
            value={card.value}
            flipped={card.flipped}
            handleFlip={handleFlip}
          />
        ))}
        {selectedCards.length === 2 && (
          <button onClick={handleMatch}>Check Match</button>
        )}
      </div>
    </div>
  );
};

export default MemoryGame;
