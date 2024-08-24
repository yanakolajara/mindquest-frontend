import { useCards } from './hooks/useCards';
import Header from './components/Header';
import Board from './components/Board';
import Card from './components/Card';
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
      <Board>
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
      </Board>
    </div>
  );
};

export default MemoryGame;
