import React from 'react';
import GameCard from './GameCard';
import './Home.scss';
type Props = {};

export default function Home(props: Props): JSX.Element {
  return (
    <main className='home'>
      <div className='games-container'>
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
      </div>
    </main>
  );
}
