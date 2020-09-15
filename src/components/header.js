import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
const HeaderWrapper = styled.nav`
  height: 100vh;
  width: 100%;
  box-shadow: 0px 3px 6px #00000029;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: grey;
  h2 {
    color: white;
    font-size: 40px;
  }
`

class Header extends React.Component {
  render() {
    return (
      <HeaderWrapper>
        <p>zdjecie</p>
        <h2>Poznaj komfort samochodów autonomicznych</h2>
      </HeaderWrapper>
    )
  }
}

export default Header
