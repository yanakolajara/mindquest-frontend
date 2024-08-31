import React from 'react';
import games from '../../data/games.json';
import GameCard from './components/GameCard';
import Info from './components/Info';
import './Home.scss';

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
            renderModal={(setIsModalOpen) => (
              <Info
                description={game.description}
                setIsModalOpen={setIsModalOpen}
              />
            )}
          />
        ))}
      </div>
    </main>
  );
}
