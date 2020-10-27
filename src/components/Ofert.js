import React from "react"
import { Link } from "gatsby"
import styled, { keyframes } from "styled-components"

import Map from "../assets/Map.png"
import Case from "../assets/Case.png"
import Plane from "../assets/Plane.png"
import Target from "../assets/Target.png"
import RoadImg from "../assets/Road.png"
import CarDriving from "../assets/CarDriving.png"

const OfertWrapper = styled.section`
  height: max-content;
  width: 100%;
  margin-top: 150px;
  margin-bottom: 350px;
  z-index: 2;
  position: relative;
  @media (max-width: 1200px) {
    margin-bottom: 100px;
  }
`
const Tittle = styled.h2`
  margin: 50px auto;
  text-align: center;
  font-size: 55px;
  color: #ff0707;
  @media (max-width: 1200px) {
    font-size: 45px;
  }
`
const TilesWrapper = styled.div`
  margin: 0 auto;
  padding: 0 25px;
  margin-top: 50px;
  max-width: 1300px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
const Titles = styled.div`
  z-index: 90;
  margin: 20px;
  width: 260px;
  height: 260px;
  box-shadow: 0px 6px 30px #00000029;
  background-color: white;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  p {
    text-align: center;
    font-size: 28px;
    color: #5d5d5d;
    font-size: bold;
  }
  &.mrt {
    margin-top: 35px;
  }
  @media (max-width: 1200px) {
    width: 240px;
    height: 240px;
    p {
      font-size: 25px;
    }
  }
`
const TitlesImg = styled.img`
  margin: 0 auto;
  margin-top: 25px;
  height: 100px;
  width: auto;
  @media (max-width: 1200px) {
    height: 80px;
  }
`
const Road = styled.div`
  top: -10%;
  left: 0;
  position: absolute;
`
const RoadImgStyle = styled.img`
  width: 99vw;
`

const DriveAnimation = keyframes`
  0% {
    top: 3.5%;
    right: 0;
  }
  5%{
    top: 11.5%;
    right: 5%;
    transform: rotate(144deg);
  }
  10%{
    top: 18.6%;
    right: 10%;
    transform: rotate(147deg);
  }
  15%{
    top: 26.5%;
    right: 15%;
    transform: rotate(140deg);
  }
  20%{
    top: 34%;
  right: 20%;
  transform: rotate(137deg);
  }
  25%{
    top: 43%;
  right: 25%;
  transform: rotate(134deg);
  }
  30%{
    top: 53%;
  right: 30%;
  transform: rotate(140deg);
  }
  35%{
    top: 60%;
  right: 35%;
  transform: rotate(152deg);
  }
  40%{
    top: 66%;
  right: 40%;
  transform: rotate(155deg);
  }
45%{
  top: 70%;
  right: 45%;
  transform: rotate(160deg);
}

  50%{
    top: 73.6%;
  right: 50%;
  transform: rotate(163deg);
  }

  55%{
    top: 76.5%;
  right: 55%;
  transform: rotate(167deg);
  }
  60%{
  top: 79%;
  right: 60%;
  transform: rotate(170deg);
  }
  65%{
    top: 81%;
  right: 65%;
  transform: rotate(173deg);
  }
  70%{
    top: 82%;
  right: 70%;
  transform: rotate(176deg);
  }
  75%{
    top: 83%;
  right: 75%;
  transform: rotate(177deg);
  }

  80%{
    top: 83.2%;
  right: 80%;
  transform: rotate(181deg);
  }
  85%{
    top: 82.8%;
  right: 85%;
  transform: rotate(183deg);
  }
  90%{
    top: 81.8%;
  right: 90%;
  transform: rotate(187deg);
  }
  95%{
    top: 79.9%;
  right: 95%;
  transform: rotate(192deg);
  }
  100%{
    top:79%;
    right: 100%;
    transform: rotate(200deg);
  } 
 

`

const CarImgStyle = styled.img`
  height: 60px;
  width: auto;
  position: absolute;
  top: 3.5%;
  right: 0;
  transform: rotate(145deg);
  animation: ${DriveAnimation} 9s linear infinite;
  @media (max-width: 1200px) {
    display: none;
  }
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
          <Titles className="mrt">
            <TitlesImg src={Target} />
            <p>Przejazdy bezkontaktowe</p>
          </Titles>
          <Titles>
            <TitlesImg src={Plane} />
            <p>Transport na duże odległości</p>
          </Titles>
          <Titles className="mrt">
            <TitlesImg src={Case} />
            <p>Wypożyczanie na minuty</p>
          </Titles>
        </TilesWrapper>
        <Road>
          <CarImgStyle src={CarDriving}></CarImgStyle>
          <RoadImgStyle src={RoadImg}></RoadImgStyle>
        </Road>
      </OfertWrapper>
    )
  }
}

export default Ofert
