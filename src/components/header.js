import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Background from "../assets/Background.png"
import Logo from "../assets/logo.png"

const HeaderWrapper = styled.section`
  height: 100vh;
  width: 100%;
  box-shadow: 0px 3px 6px #00000029;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-image: url(${Background});
  background-position: center;
  background-size: cover;
  h2 {
    color: white;
    font-size: 35px;
  }
  @media (max-width: 801px) {
    h2 {
      font-size: 24px;
    }
  }
  @media (max-width: 501px) {
    h2 {
      font-size: 18px;
    }
  }
  @media (max-width: 401px) {
    h2 {
      font-size: 16px;
    }
  }
`

const Pin = styled.img`
  height: 200px;
  width: auto;
  @media (max-width: 801px) {
    height: 180px;
  }
  @media (max-width: 501px) {
    height: 120px;
  }
`

class Header extends React.Component {
  render() {
    return (
      <HeaderWrapper>
        <Pin src={Logo}></Pin>
        <h2>Poznaj komfort samochodów autonomicznych</h2>
      </HeaderWrapper>
    )
  }
}

export default Header
