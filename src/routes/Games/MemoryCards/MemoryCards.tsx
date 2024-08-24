import React from 'react';
import Card from './components/Card';
import { useCards } from './hooks/useCards';
// import Board from './components/Board';
import './MemoryCards.scss';
import Header from './components/Header';

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
      {/* <Board cards={cards}> */}
      {/* <Card /> */}
      {/* </Board> */}
      {/* <div className='game-header'>
        <h2 className='score'>Score : {score}</h2>
        {cards.length === matchedCards.length && (
          <button className='play-again' onClick={handleNextRound}>
            Next Round
          </button>
        )}
      </div> */}
      <div className='game-board'>
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
      </div>
    </div>
  );
};

export default MemoryGame;
