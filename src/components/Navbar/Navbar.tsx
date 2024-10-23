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
      <NavItem to='/login'>Log In</NavItem>
    </NavbarContainer>
  );
};

export default Navbar;
