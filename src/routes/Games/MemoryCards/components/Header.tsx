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
};

export default function Header({ cards, matchedCards, score }: Props) {
  return (
    <header className='game-header'>
      <h2 className='score'>Score : {score}</h2>
    </header>
  );
}
