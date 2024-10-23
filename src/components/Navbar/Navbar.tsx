// import React from 'react';
// // import { useNavigate } from 'react-router-dom';
// import { FaUser } from 'react-icons/fa';
// import { IoMenu } from 'react-icons/io5';

// import './Navbar.scss';

// type Props = {};

// export default function Navbar(props: Props): JSX.Element {
//   // const navigate = useNavigate();

//   return (
//     <nav className='navbar'>
//       <div className='navbar__logo'>
//         <a className='navbar__cta navbar__logo-text' href='/'>
//           MindQuest
//         </a>
//       </div>
//       <div className='navbar__sections'>
//         <div className='navbar__routes'></div>
//         <a className='navbar__cta' href='/'>
//           Games
//         </a>
//         <a className='navbar__cta' href='/community'>
//           Community
//         </a>
//       </div>
//       <div className='navbar__account'>
//         {/* <a className='navbar__cta ' href='/login'>
//           Account
//         </a> */}
//         <a className='navbar__cta login-btn' href='/login'>
//           Log In
//         </a>
//         <a className='navbar__cta signup-btn' href='/login'>
//           Sign Up
//         </a>
//       </div>
//       <div className='navbar__icons'>
//         <a className='navbar__icons-account' href='/'>
//           <FaUser className='icon' />
//         </a>
//         <a className='navbar__icons-menu' href='/'>
//           <IoMenu className='icon' />
//         </a>
//       </div>
//     </nav>
//   );
// }

import React from 'react';
import styled from 'styled-components';
import { FaGamepad, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 220px;
`;

const NavbarLogo = styled.h1`
  width: 100%;
  margin: 20px 0px 60px 0px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
`;

const NavItem = styled(Link)`
  display: flex;

  justify-content: center;
  padding: 10px 15px;
  margin: 5px 0;
  text-decoration: none;
  text-align: center;
  font-size: 20px;
  color: #ffffff;
  border-radius: 4px;
  width: 80%;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: #78909c;
  }

  svg {
    margin-right: 10px;
  }
`;

// Componente Navbar
const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <NavbarLogo>MindQuest</NavbarLogo>
      <NavItem to='/'>
        <FaGamepad /> Games
      </NavItem>
      <NavItem to='/account'>
        <FaUser /> Account
      </NavItem>
      <NavItem to='/signup'>Sign up</NavItem>
    </NavbarContainer>
  );
};

export default Navbar;
