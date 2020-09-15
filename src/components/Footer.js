import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
const FooterWrapper = styled.nav`
  height: 10vh;
  width: 100%;
  border: 1px solid red;
  background-color: grey;
`

class Footer extends React.Component {
  render() {
    return (
      <FooterWrapper>
        <h1>Footer</h1>
      </FooterWrapper>
    )
  }
}

export default Footer
