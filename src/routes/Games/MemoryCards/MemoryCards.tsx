import React, { useState } from 'react';
import Card from './Card';
import './MemoryCards.scss';

interface Card {
  id: number;
  value: string;
  flipped: boolean;
}

const MemoryGame = () => {
  const [cards, setCards] = useState([
    { id: 1, value: 'A', flipped: false },
    { id: 2, value: 'A', flipped: false },
    { id: 3, value: 'B', flipped: false },
    { id: 4, value: 'B', flipped: false },
    { id: 5, value: 'C', flipped: false },
    { id: 6, value: 'C', flipped: false },
  ]);

  const [selectedCards, setSelectedCards] = useState<Card[]>([]);
  const [matchedCards, setMatchedCards] = useState<Card[]>([]);

  const handleFlip = (card: Card) => {
    if (selectedCards.length < 2) {
      setSelectedCards([...selectedCards, card]);
      setCards(
        cards.map((c) => (c.id === card.id ? { ...c, flipped: true } : c))
      );
    }
  };

  const handleMatch = () => {
    if (selectedCards.length === 2) {
      const [card1, card2] = selectedCards;
      if (card1.value === card2.value) {
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

  return (
    <div className='game-screen'>
      <div className='game-board'>
        {cards.map((card) => (
          <Card
            id={card.id}
            value={card.value}
            flipped={card.flipped}
            handleFlip={handleFlip}
          />
        ))}
        {selectedCards.length === 2 && (
          <button onClick={handleMatch}>Check Match</button>
        )}
      </div>
    </div>
  );
};

export default MemoryGame;
