import React from 'react';
import Card from './Card';
import { useCards } from './useCards';
import './MemoryCards.scss';

interface Card {
  id: number;
  value: string;
  flipped: boolean;
  image: string;
}

const MemoryGame = () => {
  const { cards, matchedCards, score, handleFlip, handleNextRound } =
    useCards();

  return (
    <div className='game-screen'>
      <div className='game-header'>
        <h2 className='score'>Score : {score}</h2>
        {cards.length === matchedCards.length && (
          <button className='play-again' onClick={handleNextRound}>
            Next Round
          </button>
        )}
      </div>

      <div className='game-board'>
        {cards.map((card) => (
          <Card
            id={card.id}
            value={card.value}
            flipped={card.flipped}
            image={card.image}
            handleFlip={handleFlip}
          />
        ))}
      </div>
    </div>
  );
};

export default MemoryGame;
