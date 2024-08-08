import React from 'react';
import './Navbar.scss';

type Props = {};

export default function Navbar(props: Props): JSX.Element {
  return (
    <nav className='navbar'>
      <h1 className='navbar__logo'>MindQuest</h1>
      <button className='navbar__games-btn'>Games</button>
      <button className='navbar__account-btn'>Account</button>
      <button className='navbar__login-btn'>Login</button>
    </nav>
  );
}
