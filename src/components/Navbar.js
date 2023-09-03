import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';

const StyledNavbar = styled.nav`
  background-color: #333;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <h2>Fashion</h2>
      <SearchBar />
    </StyledNavbar>
  );
};

export default Navbar;
