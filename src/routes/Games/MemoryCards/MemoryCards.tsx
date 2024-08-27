import { useCards } from './hooks/useCards';
import Header from './components/Header';
import Board from './components/Board';
import Card from './components/Card';
import './MemoryCards.scss';
import Results from './components/Results';

const MemoryGame = () => {
  const { cards, matchedCards, score, handleFlip, getTimeResult } = useCards();
  return (
    <div className='game-screen'>
      <Header cards={cards} matchedCards={matchedCards} score={score} />
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
        <Results timeResult={getTimeResult} />
      )}
    </div>
  );
};

export default MemoryGame;
