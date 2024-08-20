import React from 'react';

type CardType = {
  id: number;
  value: string;
};
type Props = {
  id: number;
  value: string;
  setSelected: React.Dispatch<React.SetStateAction<CardType[]>>;
  selected: CardType[];
  lockBoard: boolean;
};

export default function Card({
  id,
  value,
  setSelected,
  lockBoard,
  selected,
}: Props) {
  let cardStyle = {
    border: '1px solid red',
    width: '100px',
    height: '100px',
    margin: '5px',
  };

  const [state, setState] = React.useState('hidden');

  return (
    <div style={cardStyle} className={`card card__${state}`} key={id}>
      <button
        onClick={() => {
          if (lockBoard) return;
          setState('flipped');
          setSelected([...selected, { id, value }]);
        }}
      >
        <p>{value}</p>
      </button>
      <p>test</p>
    </div>
  );
}
