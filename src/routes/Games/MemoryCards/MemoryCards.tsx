import React from 'react';
// import Card from './Card';
import './MemoryCards.scss';

type Props = {};
type Card = {
  id: number;
  value: string;
  isFlipped: boolean;
  isMatched: boolean;
};

export default function MemoryCards(props: Props): JSX.Element {
  //   const [cards, setCards] = React.useState<Card[]>([]);
  const [selected, setSelected] = React.useState<Card[]>([]);
  const [lockBoard, setLockBoard] = React.useState<boolean>(false);
  let cards: Card[] = [
    {
      id: 1,
      value: 'apple',
      isFlipped: false,
      isMatched: false,
    },
    {
      id: 2,
      value: 'banana',
      isFlipped: false,
      isMatched: false,
    },
    {
      id: 3,
      value: 'banana',
      isFlipped: false,
      isMatched: false,
    },
    {
      id: 4,
      value: 'apple',
      isFlipped: false,
      isMatched: false,
    },
  ];
  const [loading, setLoading] = React.useState<boolean>(false);

  //   const addCards = () => {
  //     for (let count = 0; count < 16; count++) {
  //       let newCard = {
  //         id: count,
  //       };
  //       cards.push(newCard);
  //     }
  //     setLoading(false);
  //   };

  const displayCards = () => {
    return cards.map((card) => {
      return (
        <div
          style={{
            border: '1px solid red',
            width: '100px',
            height: '100px',
            margin: '5px',
          }}
          className='card'
        >
          <button
            onClick={() => {
              if (!lockBoard) {
                setSelected([...selected, card]);
              }
            }}
            type='button'
          >
            <p>{card.value}</p>
          </button>
          <p>test</p>
        </div>
      );
    });
  };

  const checkMatch = () => {
    setLockBoard(true);
    if (selected[0].value === selected[1].value) {
      console.log('match');

      setSelected([]);
    } else {
      console.log('no match');
      setTimeout(() => {
        setSelected([]);
      }, 1000);
    }
    setLockBoard(false);
  };

  React.useEffect(() => {
    // addCards();

    console.log('selected:', selected);
    if (selected.length > 1) {
      checkMatch();
    }
  }, [selected]);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className='memorycards'>
      <div className='memorycards__container'>{displayCards()}</div>
    </div>
  );
}
