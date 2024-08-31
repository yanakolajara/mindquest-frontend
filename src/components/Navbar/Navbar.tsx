import React from 'react';
// import { useNavigate } from 'react-router-dom';
import './Navbar.scss';

type Props = {};

export default function Navbar(props: Props): JSX.Element {
  // const navigate = useNavigate();

  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
        <a className='navbar__cta navbar__logo-text' href='/'>
          MindQuest
        </a>
      </div>
      <div className='navbar__sections'>
        <a className='navbar__cta' href='/'>
          Games
        </a>
        <a className='navbar__cta' href='/'>
          Community
        </a>
      </div>
      <div className='navbar__account'>
        {/* <a className='navbar__cta ' href='/login'>
          Account
        </a> */}
        <a className='navbar__cta login-btn' href='/login'>
          Log In
        </a>
        <a className='navbar__cta signup-btn' href='/login'>
          Sign Up
        </a>
      </div>
    </nav>
  );
}
