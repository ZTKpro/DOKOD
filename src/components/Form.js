import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const FormWrapper = styled.section`
  margin: -220px auto;
  margin-bottom: 50px;
  height: max-content;
  width: 1300px;
  box-shadow: 0px 3px 25px #00000029;
  border-radius: 15px;
  background-color: white;
  padding: 25px;
`

const InputWrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  diplay: flex;
  flex-wrap: wrap;
  input {
    border: none;
    width: 500px;
    height: 70px;
    background-color: white;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 6px;
    margin: 20px;
    padding: 15px;
  }
`

const Btn = styled.div`
  background-color: #ff0707;
  margin: 15px auto;
  width: 250px;
  height: 84px;
  box-shadow: 0px 3px 12px #ff0707d6;
  border-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 35px;
    color: white;
  }
`

class Form extends React.Component {
  render() {
    return (
      <FormWrapper>
        <InputWrapper>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
        </InputWrapper>
        <Btn>
          <p>Zamów</p>
        </Btn>
      </FormWrapper>
    )
  }
}

export default Form
