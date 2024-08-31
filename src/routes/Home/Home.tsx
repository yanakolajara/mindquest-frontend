import React from 'react';
import GameCard from './components/GameCard';
import './Home.scss';
import games from '../../data/games.json';

type Props = {};

export default function Home(props: Props): JSX.Element {
  return (
    <main className='home'>
      <div className='games-container'>
        {games.map((game) => (
          <GameCard
            title={game.title}
            snapshot={game.snapshot}
            route={game.route}
            factors={game.gameFactors}
            description={game.description}
          />
        ))}
      </div>
    </main>
  );
}
