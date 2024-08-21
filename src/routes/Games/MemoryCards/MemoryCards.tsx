import React from 'react';
import Card from './Card';
import { useCards } from './useCards';
import './MemoryCards.scss';

const MemoryGame = () => {
  const { cards, selectedCards, handleFlip, handleMatch, matchedCards } =
    useCards();

  return (
    <div className='game-screen'>
      <p>Score : {matchedCards.length / 2}</p>
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
