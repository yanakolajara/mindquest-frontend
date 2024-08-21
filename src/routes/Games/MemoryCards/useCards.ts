import React from 'react';

interface Card {
  id: number;
  value: string;
  flipped: boolean;
}

const useCards = () => {
  const [cards, setCards] = React.useState([
    { id: 1, value: 'A', flipped: false },
    { id: 2, value: 'A', flipped: false },
    { id: 3, value: 'B', flipped: false },
    { id: 4, value: 'B', flipped: false },
    { id: 5, value: 'C', flipped: false },
    { id: 6, value: 'C', flipped: false },
    { id: 7, value: 'D', flipped: false },
    { id: 8, value: 'D', flipped: false },
  ]);
  const [selectedCards, setSelectedCards] = React.useState<Card[]>([]);
  const [matchedCards, setMatchedCards] = React.useState<Card[]>([]);

  const handleFlip = (card: Card) => {
    if (selectedCards.length < 2 && card.flipped === false) {
      console.log('here');
      setSelectedCards([...selectedCards, card]);
      setCards(
        cards.map((c) => (c.id === card.id ? { ...c, flipped: true } : c))
      );
    }
  };

  const handleMatch = () => {
    if (selectedCards.length === 2) {
      const [card1, card2] = selectedCards;
      if (card1.value === card2.value && card1.id !== card2.id) {
        setMatchedCards([...matchedCards, card1, card2]);
        setSelectedCards([]);
      } else {
        setTimeout(() => {
          setCards(
            cards.map((c) =>
              c.id === card1.id || c.id === card2.id
                ? { ...c, flipped: false }
                : c
            )
          );
          setSelectedCards([]);
        }, 1000);
      }
    }
  };

  React.useEffect(() => {
    if (selectedCards.length === 2) {
      handleMatch();
    }
  }, [selectedCards]);
  return {
    cards,
    handleFlip,
    selectedCards,
    handleMatch,
    matchedCards,
  };
};

export { useCards };
