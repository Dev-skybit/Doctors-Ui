import React from 'react';

import Doctors from './components/DoctorsCardsWrapper';
import Profile from './components/Profile';
import SearchTab from './components/SearchTab';
import Appointments from './components/Appointments';

import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;

  overflow-x: hidden;
  overflow-y: scroll;
`

function App() {

  return (
    <Container>
      <Profile />

      <SearchTab />

      <Doctors />

      <Appointments />
    </Container>
  );
}

export default App;
