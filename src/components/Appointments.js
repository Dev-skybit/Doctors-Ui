import React from 'react'
import styled from 'styled-components'

import { colors } from '../styles/variables'
import { Star, Calendar } from 'styled-icons/fa-solid'


const Appointment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin: 2rem 4rem 0 4rem;
`

const AppointmentCard = styled.div`
  display: grid;
  place-content: center;
  grid-template-columns: 70%  30%;
  grid-template-rows: repeat(2, 6rem);
  gap: 1rem;

  height: 18rem;
  width: 100%;

  padding: 2rem;

  border-radius: 1.5rem;
  background: ${colors.violet};

  img{
    height: 5rem; 
    width: 100%;

    border-radius: 2rem;
  }

  button{
    font-size: 1.2rem;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    grid-column: 1/3;

    background: rgba(255, 255, 255, 0.2);
    border: none;
    border-radius: 2rem;
  }
`

const AppointmentDoctor = styled.div`
  color: white;

  display: grid;
  grid-template-columns: 30% 60%;
  grid-template-rows: repeat(3, 1fr);

  img{
    grid-row: 1 / 3;

    height: 100%;
    width: 80%;

    border-radius: 1rem;
  }

  span{
    grid-column: 2;
    display: flex;
    align-items: center;
  }
`

const OrangeStar = styled(Star)`
  font-size: 1rem;
  color: ${colors.orange};

  height: 1rem;
  width: 1rem;
`

const WhiteCalendar = styled(Calendar)`
  color: rgba(255, 255, 255, 0.3);

  height: 1.6rem;
  width: 1.6rem;
`

const Appointments = () => {
  return (
    <Appointment>
      <h1>Your Appointment</h1>

      <AppointmentCard>
        <AppointmentDoctor>
          <img src="https://aawafi.com/uploads/partners/profile/doctor.jpg" />

          <h1>Dr. Samantha</h1>
          <p>Cardiologist</p>

          <span> <OrangeStar /> 4.9 </span>
        </AppointmentDoctor>

        <img src="https://staticmapmaker.com/img/google@2x.png" />

        <button> <WhiteCalendar /> 19 June 2021, 2:00pm </button>
      </AppointmentCard>
    </Appointment>
  )
}

export default Appointments
