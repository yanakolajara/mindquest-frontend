import { useCards } from './hooks/useCards';
import Header from './components/Header';
import Board from './components/Board';
import Card from './components/Card';
import Results from './components/Results';
import './MemoryCards.scss';

const MemoryGame = () => {
  const { cards, matchedCards, score, handleFlip, getTimeResult } = useCards();
  return (
    <div className='game-screen'>
      {!getTimeResult() ? (
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
      ) : (
        <Results timeResult={getTimeResult} score={score} />
      )}
    </div>
  );
};

export default MemoryGame;
