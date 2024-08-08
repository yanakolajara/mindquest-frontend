import React from 'react';

type Props = {};

export default function GameCard(props: Props) {
  return (
    <div>
      <img src='' alt='' />
      <h3 className='gamecard__title'>Title</h3>
      <div className='gamecard__info'></div>
      <button className='gamecard__play-btn'>Play</button>
    </div>
  );
}
