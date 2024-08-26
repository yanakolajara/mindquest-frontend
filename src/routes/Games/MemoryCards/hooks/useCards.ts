import React from 'react';
import data from '../data/CardOptions.json';

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
    const newCards = [];
    for (let i = 0; i < pairs; i++) {
      newCards.push(
        {
          id: Math.random().toString(36).substring(2, 15),
          value: data[i].value,
          flipped: true,
          image: data[i].image,
        },
        {
          id: Math.random().toString(36).substring(2, 15),
          value: data[i].value,
          flipped: true,
          image: data[i].image,
        }
      );
      setCards(newCards.sort(() => Math.random() - 0.5));
    }
    if (newCards.length > 0) {
      hideCards(newCards);
    }
  };

  const handleFlip = (card: Card) => {
    if (selectedCards.length < 2 && card.flipped === false) {
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
    generateCards(6);
  };

  const hideCards = (newCards: Card[]) => {
    setTimeout(() => {
      setCards(
        newCards.map((c) => {
          return { ...c, flipped: false };
        })
      );
    }, 1500);
  };

  React.useEffect(() => {
    if (selectedCards.length === 2) handleMatch();
    if (cards.length === 0 && score === 0) generateCards(4);
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
