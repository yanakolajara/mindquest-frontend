import React from 'react';
import { formatJsonText } from '../../../utils/formatting';
import './GameCard.scss';

type FactoyType = {
  factor: string;
  value: string | number | string[];
  // icon: string;
};

type Props = {
  title: string;
  snapshot: string;
  route: string;
  factors: FactoyType[];
  description: string;
};

export default function GameCard({
  title,
  snapshot,
  route,
  factors,
  description,
}: Props) {
  const cardImage = require(`../../../assets/${snapshot}`);
  const joinWithCommas = (array: string[]) => {
    if (array.length === 0) return '';
    if (array.length === 1) return array[0];
    return array.slice(0, -1).join(', ') + ', and ' + array[array.length - 1];
  };
  const displaySkills = factors.map((factor) => {
    return factor.factor === 'Skills' ? (
      <p className='gamecard__info-item'>
        {factor.factor}: {joinWithCommas(factor.value as string[])}
      </p>
    ) : (
      <p className='gamecard__info-item'>
        {factor.factor}: {factor.value}
      </p>
    );
  });
  return (
    <div className='gamecard'>
      <img className='gamecard__snapshot' src={cardImage} alt='' />
      <h3 className='gamecard__title'>{title}</h3>
      <div className='gamecard__info'>{displaySkills}</div>
      <div className='gamecard__buttons'>
        <button
          className='info btn'
          onClick={() => console.log(formatJsonText(description))}
        >
          Info
        </button>
        <button
          className='play btn'
          onClick={() => (window.location.href = route)}
        >
          Play
        </button>
      </div>
    </div>
  );
}
