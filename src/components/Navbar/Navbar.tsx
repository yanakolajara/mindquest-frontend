import React from 'react';

type Props = {};

export default function Navbar(props: Props): JSX.Element {
  return (
    <nav className='navbar'>
      <h1>MindQuest</h1>
      <button>Log in</button>
    </nav>
  );
}
