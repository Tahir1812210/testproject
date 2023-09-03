import React from 'react';
import { styled } from 'styled-components';

const StyledSearchBar = styled.input`
  padding: 8px;
  border: none;
  border-radius: 5px;
`;

const SearchBar = () => {
  return <StyledSearchBar type="text" placeholder="Search..." />;
};

export default SearchBar;
