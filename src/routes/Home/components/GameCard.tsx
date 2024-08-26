import React from 'react';

type Props = {
  title: string;
  snapshot: string;
  route: string;
};

export default function GameCard({ title, snapshot, route }: Props) {
  return (
    <div className='gamecard'>
      <img className='gamecard__snapshot' src='' alt='' />
      <h3 className='gamecard__title'>{title}</h3>
      <div className='gamecard__info'></div>
      <button
        className='gamecard__play-btn'
        onClick={() => (window.location.href = route)}
      >
        Play
      </button>
    </div>
  );
}
