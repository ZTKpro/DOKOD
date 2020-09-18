import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"

import Logo from "../assets/logo.png"

const NavWrapper = styled.nav`
  height: 60px;
  width: 100%;
  box-shadow: 0px 3px 6px #00000029;
  position: fixed;
  top: 0;
  left: 0%;

  background-color: white;
`
const NavContent = styled.div`
  margin: 0 auto;
  height: 100%;
  width: 1300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const LogoImg = styled.img`
  height: 75%;
  width: auto;
  margin-right: 15px;
`

const LogoWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  p {
    font-size: 19px;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
`
const NavItemWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  p {
    font-size: 18px;
    margin-right: 30px;
    cursor: pointer;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
`

class Nav extends React.Component {
  render() {
    return (
      <NavWrapper>
        <NavContent>
          <LogoWrapper>
            <LogoImg src={Logo}></LogoImg>

            <p>DOKOD</p>
          </LogoWrapper>
          <NavItemWrapper>
            <p>Oferta</p>
            <p>Aplikacja</p>
            <p>Zaloguj się</p>
            <p>Wyloguj się</p>
          </NavItemWrapper>
        </NavContent>
      </NavWrapper>
    )
  }
}

export default Nav
