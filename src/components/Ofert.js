import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
const OfertWrapper = styled.nav`
  height: 100vh;
  width: 100%;
  box-shadow: 0px 3px 6px #00000029;
  background-color: grey;
`

class Ofert extends React.Component {
  render() {
    return (
      <OfertWrapper>
        <h1>ofert</h1>
      </OfertWrapper>
    )
  }
}

export default Ofert
