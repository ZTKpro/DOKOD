import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"

import Logo from "../assets/logo.png"

const NavWrapper = styled.nav`
  padding: 15px 135px;
  height: 60px;
  width: 100%;
  box-shadow: 0px 3px 6px #00000029;
  position: fixed;
  top: 0;
  left: 0%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
`

const LogoImg = styled.img`
  height: 100%;
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
      <NavWrapper className="nav">
        {/* <div className="g-container nav__container">
          <Link className="nav__Link" to="/"> */}
        <LogoWrapper>
          <LogoImg src={Logo}></LogoImg>
          {/* </Link>

          <div
            onClick={() => {
              console.log("otwórz nav")
            }}
            className="nav__collapse"
          >
            <div className="nav__collapseItem"></div>
            <div className="nav__collapseItem"></div>
            <div className="nav__collapseItem"></div>
          </div> */}
          {/* <NavScroll /> */}
          {/* </div> */}
          <p>DOKOD</p>
        </LogoWrapper>
        <NavItemWrapper>
          <p>Oferta</p>
          <p>Aplikacja</p>
          <p>Zaloguj się</p>
          <p>Wyloguj się</p>
        </NavItemWrapper>
      </NavWrapper>
    )
  }
}

export default Nav
