import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Map from "../assets/Map.png"
import Case from "../assets/Case.png"
import Plane from "../assets/Plane.png"
import Target from "../assets/Target.png"

const OfertWrapper = styled.section`
  height: max-content;
  width: 100%;
`
const Tittle = styled.h2`
  margin: 50px auto;
  text-align: center;
  font-size: 60px;
  color: #ff0707;
`
const TilesWrapper = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  width: 1300px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
const Titles = styled.div`
  padding: 25px;
  margin: 15px;
  width: 280px;
  height: 280px;
  box-shadow: 0px 6px 30px #00000029;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  p {
    text-align: center;
    font-size: 33px;
    color: #5d5d5d;
    font-size: bold;
  }
`
const TitlesImg = styled.img`
  margin: 0 auto;
  margin-top: 25px;
  height: 100px;
  width: auto;
`

class Ofert extends React.Component {
  render() {
    return (
      <OfertWrapper>
        <Tittle>Nasza Oferta</Tittle>
        <TilesWrapper>
          <Titles>
            <TitlesImg src={Map} />
            <p>Transport miedzymiastowy</p>
          </Titles>
          <Titles>
            <TitlesImg src={Target} />
            <p>Przejazdy bezkontaktowe</p>
          </Titles>
          <Titles>
            <TitlesImg src={Plane} />
            <p>Transport na duże odległości</p>
          </Titles>
          <Titles>
            <TitlesImg src={Case} />
            <p>Wypożyczanie na minuty</p>
          </Titles>
        </TilesWrapper>
      </OfertWrapper>
    )
  }
}

export default Ofert
