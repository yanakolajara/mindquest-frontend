import React from 'react';
import data from './CardOptions.json';

interface Card {
  id: string;
  value: string;
  flipped: boolean;
  image: string;
}

const useCards = () => {
  const [cards, setCards] = React.useState<Card[]>([]);
  const [selectedCards, setSelectedCards] = React.useState<Card[]>([]);
  const [matchedCards, setMatchedCards] = React.useState<Card[]>([]);
  const [score, setScore] = React.useState(0);

  const generateCards = (pairs: number) => {
    setCards([]);
    const newCards = [];
    for (let i = 0; i < pairs; i++) {
      console.log(data[i].value);
      const randomID = generateRandomID();
      console.log('randomID: ', randomID);
      newCards.push(
        {
          id: generateRandomID(),
          value: data[i].value,
          flipped: false,
          image: data[i].image,
        },
        {
          id: generateRandomID(),
          value: data[i].value,
          flipped: false,
          image: data[i].image,
        }
      );
      console.log('loop: ', i);
      console.log('newCards: ', newCards);
    }
    setCards(newCards.sort(() => Math.random() - 0.5));
  };

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
    generateCards(4);
  };

  const generateRandomID = () => {
    return Math.random().toString(36).substring(2, 15);
  };

  React.useEffect(() => {
    if (selectedCards.length === 2) {
      handleMatch();
    }
    if (cards.length === 0 && score === 0) {
      generateCards(4);
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
