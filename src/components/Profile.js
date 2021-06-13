import React from 'react'

import styled from 'styled-components'
import { Bell, MapMarkerAlt } from 'styled-icons/fa-solid'
import { colors } from '../styles/variables'

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 4rem;
`

const ProfileInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 10rem);
  grid-template-rows: repeat(4, 1fr);
  gap: 1rem;

  h1{
    grid-column: 2;
    grid-row: 2;
  }

  span{
    color: ${colors.green};
    font-weight: bolder;

    grid-row: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;

    background: ${colors.lightGreen};
  }

  img{
    height: 100%;
    width: 100%;

    grid-row: 1/5;

    border-radius: 1rem;
  }
`

const WhiteBell = styled(Bell)`
  height: 4rem;
  width: 4rem;

  padding: 1rem;

  border: 1px solid #EBEFF2;
  border-radius: 1rem;
  cursor: pointer;
`

const Location = styled(MapMarkerAlt)`
  height: 1rem;
  width: 1rem;
`

const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileInfo>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVzcUGslfVPVqes4Z0oY0vaSifqQ626RLUAw&usqp=CAU" />
        <h1>Hi, Alex!</h1>

        <span> <Location /> CMDX </span>
      </ProfileInfo>

      <WhiteBell />
    </ProfileContainer>
  )
}

export default Profile
