import React from 'react';

type CardType = {
  id: number;
  value: string;
  state: string;
};

const useCards = () => {
  const [lockBoard, setLockBoard] = React.useState<boolean>(false);
  let selectedCards: CardType[] = [];
  let selectedCards2: CardType[] = [];
  const flipCard = ({ id, value, state }: CardType) => {};

  React.useEffect(() => {}, [lockBoard]);
  return {
    lockBoard,
    setLockBoard,
    flipCard,
  };
};

export { useCards };
