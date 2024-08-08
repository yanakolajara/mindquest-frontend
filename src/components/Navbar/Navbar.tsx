import React from 'react';
import './Navbar.scss';
import { useNavigate } from 'react-router-dom';

type Props = {};

export default function Navbar(props: Props): JSX.Element {
  const navigate = useNavigate();
  return (
    <nav className='navbar'>
      <h1 className='navbar__logo' onClick={() => navigate('/')}>
        MindQuest
      </h1>
      <button className='navbar__games-btn'>Games</button>
      <button className='navbar__account-btn'>Account</button>
      <button className='navbar__login-btn'>Login</button>
    </nav>
  );
}
