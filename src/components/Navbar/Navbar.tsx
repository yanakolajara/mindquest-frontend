import React from 'react';
// import { useNavigate } from 'react-router-dom';
import './Navbar.scss';

type Props = {};

export default function Navbar(props: Props): JSX.Element {
  // const navigate = useNavigate();

  return (
    <nav className='navbar'>
      <a className='navbar__cta navbar__logo' href='/'>
        MindQuest
      </a>
      <div className='navbar__sections'>
        <a className='navbar__cta' href='/'>
          Games
        </a>
        <a className='navbar__cta' href='/'>
          Community
        </a>
      </div>

      <a className='navbar__cta ' href='/login'>
        Account
      </a>
      {/* <button className='navbar__login-btn' onClick={() => navigate('/login')}>
        Login
      </button> */}
    </nav>
  );
}
