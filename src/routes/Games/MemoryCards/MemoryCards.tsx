import React from 'react';
import Card from './components/Card';
import { useCards } from './hooks/useCards';
import Header from './components/Header';
import Board from './components/Board';
import './MemoryCards.scss';

const MemoryGame = () => {
  const { cards, matchedCards, score, handleFlip, handleNextRound } =
    useCards();
  return (
    <div className='game-screen'>
      <Header
        cards={cards}
        matchedCards={matchedCards}
        score={score}
        handleNextRound={handleNextRound}
      />
      <Board cards={cards} handleFlip={handleFlip}></Board>

      {/* <div className='game-board'>
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
      </div> */}
    </div>
  );
};

export default MemoryGame;
