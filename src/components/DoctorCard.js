import styled from 'styled-components'

import { colors, variables } from '../styles/variables'
import { Star, Calendar } from 'styled-icons/fa-solid'

const Card = styled.div`
  flex: 0 0 14rem;
  display: grid;
  grid-template-rows: 90% 10%;
  
  height: 100%;

  padding: .8rem;

  background: ${colors.blue};
  border-radius: 1rem;
`

const Image = styled.div`
  color: white;
  -webkit-text-stroke-width: .02rem;
  -webkit-text-stroke-color: grey;

  position: relative;

  display: flex;
  justify-content: center;

  height: 16rem;

  margin-bottom: .6rem;

  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  overflow: hidden;

  img{
    height: 100%;
    width: 100%;
  }

  p,
  span{
    position: absolute;
  }

  p{
    font-size: 1.8rem;
    bottom: 2rem;
  }

  span{
    font-size: 1rem;
    bottom: 1rem;
  }
`

const Characteristics = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Califications = styled.div`
  font-size: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: .2rem;
`

const OrangeStar = styled(Star)`
  color: ${colors.orange};

  height: 2rem;
  width: 2rem;

  padding: .4rem;

  background: ${colors.lightOrange};
  border-radius: .5rem;
`

const PurpleCalendar = styled(Calendar)`
  color: ${colors.purple};

  height: 2rem;
  width: 2rem;

  padding: .4rem;

  background: ${colors.lightPurple};
  border-radius: .5rem;
`

const StyledCard = ({ img, name, department, stars, years }) => {

  return (
    <Card>
      <Image>
        <img src={img} alt={img} />
        <p> {name} </p>
        <span> {department} </span>
      </Image>

      <Characteristics>
        <Califications> <OrangeStar />  <p> {stars} </p>  </Califications>
        <Califications> <PurpleCalendar /> <span> {years} </span> </Califications>
      </Characteristics>
    </Card>
  )
}

export default StyledCard