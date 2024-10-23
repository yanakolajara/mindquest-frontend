import React from 'react';
import styled from 'styled-components';

// Definimos los tipos de props para ContentWrap
type ContentWrapProps = {
  renderNavbar?: () => React.ReactNode;
  children: React.ReactNode;
};

// Contenedor principal estilizado para envolver todo el contenido
const StyledContentWrap = styled.div`
  display: flex;
  border: 2px solid #90a4ae;
  border-radius: 8px;
  padding: 16px 16px 16px 0px;
  width: 100%;
  height: 100vh;
  background-color: #90a4ae;
  box-sizing: border-box;
`;

// Contenedor estilizado para el contenido principal
const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
`;

// ContentWrap que recibe el navbar opcionalmente y el contenido principal
const ContentWrap: React.FC<ContentWrapProps> = ({
  renderNavbar,
  children,
}) => {
  return (
    <StyledContentWrap>
      {renderNavbar && renderNavbar()}
      <MainContent>{children}</MainContent>
    </StyledContentWrap>
  );
};

export default ContentWrap;
