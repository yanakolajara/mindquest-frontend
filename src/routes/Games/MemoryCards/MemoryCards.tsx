import React from 'react';
// import Card from './Card';
import './MemoryCards.scss';
import Card from './Card';

type Props = {};
type CardType = {
  id: number;
  value: string;
};

export default function MemoryCards(props: Props): JSX.Element {
  //   const [cards, setCards] = React.useState<Card[]>([]);
  const [selected, setSelected] = React.useState<CardType[]>([]);
  const [lockBoard, setLockBoard] = React.useState<boolean>(false);
  let cards: CardType[] = [
    {
      id: 1,
      value: 'apple',
    },
    {
      id: 2,
      value: 'banana',
    },
    {
      id: 3,
      value: 'banana',
    },
    {
      id: 4,
      value: 'apple',
    },
  ];

  const displayCards = () => {
    return cards.map((card) => {
      return (
        <Card
          id={card.id}
          value={card.value}
          setSelected={setSelected}
          selected={selected}
          lockBoard={lockBoard}
        />
      );
    });
  };
  return (
    <div className='game-screen'>
      <p>
        Score:
        {/* {score} */}
      </p>
      <div className='game-board'>{displayCards()}</div>
    </div>
  );
}
