import './Header.scss';

interface Card {
  id: string;
  value: string;
  flipped: boolean;
  image: string;
}

type Props = {
  cards: Card[];
  matchedCards: Card[];
  score: number;
  handleNextRound: () => void;
};

export default function Header({
  cards,
  matchedCards,
  score,
  handleNextRound,
}: Props) {
  return (
    <header className='game-header'>
      <h2 className='score'>Score : {score}</h2>
      {cards.length === matchedCards.length && (
        <button className='play-again' onClick={handleNextRound}>
          Next Round
        </button>
      )}
    </header>
  );
}
