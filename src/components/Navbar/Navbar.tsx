import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { IoMenu } from 'react-icons/io5';

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
        <div className='navbar__routes'></div>
        <a className='navbar__cta' href='/'>
          Games
        </a>
        <a className='navbar__cta' href='/community'>
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
      <div className='navbar__icons'>
        <a className='navbar__icons-account' href='/'>
          <FaUser className='icon' />
        </a>
        <a className='navbar__icons-menu' href='/'>
          <IoMenu className='icon' />
        </a>
      </div>
    </nav>
  );
}
