import React from 'react';
import './Board.scss';

type Props = {
  children?: React.ReactNode;
};

export default function Board({ children }: Props) {
  return <main className='game-board'>{children}</main>;
}
