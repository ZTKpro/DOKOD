import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
const AppWrapper = styled.nav`
  height: 100vh;
  width: 100%;
  box-shadow: 0px 3px 6px #00000029;
  background-color: grey;
`

class App extends React.Component {
  render() {
    return (
      <AppWrapper>
        <h1> app</h1>
      </AppWrapper>
    )
  }
}

export default App
