import React,{useState} from "react"
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
  z-index: 10;
  background-color: white;
`
const NavContent = styled.div`
  margin: 0 auto;
  height: 100%;
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1200px) {
    width: 800px;
    padding: 0 25px;
  }
  @media (max-width: 801px) {
    width: 98%;
    padding: 0 25px;
  }
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
  &.hidden{
    opacity:0;
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
  @media (max-width: 801px) {
    display: none;
  }
`
const Hamburger = styled.div`
  height: 28px;
  width: 30px;
  display: block;
  position: relative;
  .mid {
    top: 50%;
    transform: translateY(-3px);
  }
  .bottom {
    bottom: 0;
  }
  div {
    background-color: grey;
    position: absolute;
    height: 6px;
    width: 100%;
    left: 0;
  }
  &.open{
    div{
     transform: rotate(45deg) translateY(250%) ;
    }
    .mid{
      opacity:0;
    }
    .bottom {
      transform: rotate(-45deg) translateY(-250%) ;
    }
  }
  @media (min-width: 800px) {
    display: none;
  }
`
const NavCollapse = styled.div`
height:100vh;
width:100vw;
background-color:white;
z-index:1000;
top:0;
left:0;
display:none;
padding:25px 50px;
&.open{
  display:block;
}
p{
  margin-bottom:20;
  padding:0;
}
`



function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const collapseNav = () => {
    setIsMenuOpen(!isMenuOpen)
  }
    return (
      <NavWrapper>
      <NavContent>
        <LogoWrapper className={isMenuOpen ? "hidden" : ""}>
          <LogoImg src={Logo} ></LogoImg>
          <p>DOKOD</p>
        </LogoWrapper>
        <NavItemWrapper>
          <p>Oferta</p>
          <p>Aplikacja</p>
          <p>Zaloguj się</p>
          <p>Wyloguj się</p>
        </NavItemWrapper>
        <Hamburger className={isMenuOpen ? "open" : ""} onClick={collapseNav}>
          <div className="top"></div>
          <div className="mid"></div>
          <div className="bottom"></div>
        </Hamburger>
      </NavContent>
      <NavCollapse className={isMenuOpen ? "open" : ""}> 
          <p>Oferta</p>
          <p>Aplikacja</p>
          <p>Zaloguj się</p>
          <p>Wyloguj się</p>
      </NavCollapse>
     </NavWrapper>
    )

}

export default Nav
