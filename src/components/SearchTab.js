import React from 'react'
import styled from 'styled-components'

import { Search } from 'styled-icons/fa-solid'
import { colors } from '../styles/variables';

const SearchForm = styled.form`
  margin: 0 4rem 2rem 4rem;
`;

const Input = styled.div`
  height: 5rem;

  display: grid;
  grid-template-columns: 84% 14%;
  justify-content: space-between;

  margin-top: 2rem;

  border-radius: 1rem;

  button, input{
    border: none;
    outline: none;

    border-radius: 1rem;
  }

  input{
    font-size: 1.4rem;
    
    padding: 0 0 0 1rem;

    background: ${colors.grey};
  }

  button{
    color: ${colors.white};

    padding: 1.6rem;

    background: ${colors.purple};
  }
`;

const SearchIcon = styled(Search)`
  color: ${colors.white};
`

const SearchTab = () => {
  return (
    <SearchForm>
      <h1>Let's Find Your Doctor</h1>

      <Input>
        <input type="text" placeholder="Search a doctor" />
        <button> <SearchIcon /> </button>
      </Input>
    </SearchForm>
  )
}

export default SearchTab
