import React from 'react'
import styled from 'styled-components'

import Card from './DoctorCard'

const DoctorCardsWrapper = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  gap: 2rem;

  overflow-x: scroll;
  margin: 0 4rem 3rem 4rem;
`

const Doctors = () => {
  return (
    <DoctorCardsWrapper>
      <Card img="https://aawafi.com/uploads/partners/profile/doctor.jpg" name="Dr. Samantha" department="Cardiologist" stars="4.9" years="8 years" />
      <Card img="https://vader.news/__export/1605052647693/sites/gadgets/img/2020/11/10/the-good-doctor-freddie-highmore.jpg_358835944.jpg" name="Dr. Shawn" department="Neurology" stars="4.9" years="10  años" />
      <Card img="/doc1.png" name="Dr" department="Neurology" stars="4.9" years="10  años" />
      <Card img="/doc1.png" name="Dr" department="Neurology" stars="4.9" years="10  años" />
      <Card img="/doc1.png" name="Dr" department="Neurology" stars="4.9" years="10  años" />
      <Card img="/doc1.png" name="Dr" department="Neurology" stars="4.9" years="10  años" />
    </DoctorCardsWrapper>
  )
}

export default Doctors
