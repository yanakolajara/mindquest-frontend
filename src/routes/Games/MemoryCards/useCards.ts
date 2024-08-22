import React from 'react';
import data from './CardOptions.json';

interface Card {
  id: number;
  value: string;
  flipped: boolean;
  image: string;
}

const useCards = () => {
  const [cards, setCards] = React.useState([
    { id: 1, value: data[0].value, flipped: false, image: data[0].image },
    { id: 2, value: data[0].value, flipped: false, image: data[0].image },
    { id: 3, value: data[1].value, flipped: false, image: data[1].image },
    { id: 4, value: data[1].value, flipped: false, image: data[1].image },
    { id: 5, value: data[2].value, flipped: false, image: data[2].image },
    { id: 6, value: data[2].value, flipped: false, image: data[2].image },
    { id: 7, value: data[3].value, flipped: false, image: data[3].image },
    { id: 8, value: data[3].value, flipped: false, image: data[3].image },
  ]);
  const [selectedCards, setSelectedCards] = React.useState<Card[]>([]);
  const [matchedCards, setMatchedCards] = React.useState<Card[]>([]);
  const [score, setScore] = React.useState(0);

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
        setScore(score + 1);
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

  const handleNextRound = () => {
    setSelectedCards([]);
    setMatchedCards([]);
    setCards([
      { id: 1, value: data[0].value, flipped: false, image: data[0].image },
      { id: 2, value: data[0].value, flipped: false, image: data[0].image },
      { id: 3, value: data[1].value, flipped: false, image: data[1].image },
      { id: 4, value: data[1].value, flipped: false, image: data[1].image },
      { id: 5, value: data[2].value, flipped: false, image: data[2].image },
      { id: 6, value: data[2].value, flipped: false, image: data[2].image },
      { id: 7, value: data[3].value, flipped: false, image: data[3].image },
      { id: 8, value: data[3].value, flipped: false, image: data[3].image },
    ]);
  };

  React.useEffect(() => {
    if (selectedCards.length === 2) {
      handleMatch();
    }
  }, [selectedCards]);
  return {
    cards,
    selectedCards,
    matchedCards,
    score,
    handleFlip,
    handleMatch,
    handleNextRound,
  };
};

export { useCards };
