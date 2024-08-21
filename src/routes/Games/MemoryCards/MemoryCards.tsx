import React from 'react';
import Card from './Card';
import { useCards } from './useCards';
import './MemoryCards.scss';

const MemoryGame = () => {
  const { cards, handleFlip, matchedCards } = useCards();

  return (
    <div className='game-screen'>
      <h2 className='score'>Score : {matchedCards.length / 2}</h2>
      <div className='game-board'>
        {cards.map((card) => (
          <Card
            id={card.id}
            value={card.value}
            flipped={card.flipped}
            handleFlip={handleFlip}
          />
        ))}
      </div>
    </div>
  );
};

export default MemoryGame;
