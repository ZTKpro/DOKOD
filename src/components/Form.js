import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
const FormWrapper = styled.nav`
  height: 100vh;
  width: 100%;
  box-shadow: 0px 3px 6px #00000029;
  background-color: grey;
`

class Form extends React.Component {
  render() {
    return (
      <FormWrapper>
        <h1>form</h1>
      </FormWrapper>
    )
  }
}

export default Form
