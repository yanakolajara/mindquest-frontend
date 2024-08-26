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
      <Board
        cards={cards}
        renderCard={(id, value, flipped, image) => (
          <Card
            id={id}
            value={value}
            flipped={flipped}
            image={image}
            handleFlip={handleFlip}
          />
        )}
      />
    </div>
  );
};

export default MemoryGame;
