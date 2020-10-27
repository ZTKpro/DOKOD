import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Pin from "../assets/Pin.png"
import Telephone from "../assets/Telephone.png"
import Clock from "../assets/Clock.png"
import Car from "../assets/Car.png"
import Wallet from "../assets/Wallet.png"

const FormWrapper = styled.section`
  margin: -220px auto;
  margin-bottom: 50px;
  height: max-content;
  width: 1000px;
  box-shadow: 0px 3px 25px #00000029;
  border-radius: 15px;
  background-color: white;
  padding: 25px;
  @media (max-width: 1001px) {
    width: 500px;
  }
  @media (max-width: 501px) {
    width: 320px;
  }
`

const InputWrapper = styled.div`
  margin: 0 auto;
  width: max-content;
  max-width: 95%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  li {
    border: none;
    width: 430px;
    height: 60px;
    background-color: #f9f9f9;
    border-radius: 6px;
    margin-top: 35px;
    padding: 0 15px;
    list-style: none;
    display: flex;
    align-items: center;
    img {
      height: 50%;
      width: auto;
      margin-right: 15px;
    }
    input {
      height: 100%;
      width: 100%;
      border: none;
      background-color: transparent;
      font-size: 22px;
      padding: 15px;
      outline: none;
      color: #00000090;
    }
  }
  @media (max-width: 1001px) {
    justify-content: center;
  }
  @media (max-width: 501px) {
    li {
      input {
        font-size: 19px;
      }
    }
  }
`

const Btn = styled.button`
  background-color: #ff0707;
  margin: 15px auto;
  margin-top: 40px;
  width: 230px;
  height: 70px;
  box-shadow: 0px 3px 12px #ff0707d6;
  border-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  cursor: pointer;
  p {
    font-size: 35px;
    color: white;
  }
  :hover {
    opacity: 0.9;
  }
  @media (max-width: 501px) {
    width: 160px;
    height: 50px;
    p {
      font-size: 22px;
    }
  }
`

class Form extends React.Component {
  render() {
    return (
      <FormWrapper>
        <InputWrapper>
          <li>
            <img src={Pin}></img>
            <input placeholder="OD"></input>
          </li>
          <li>
            <img src={Pin}></img>
            <input placeholder="DO"></input>
          </li>
          <li>
            <img src={Telephone}></img>
            <input placeholder="Numer Telefonu"></input>
          </li>
          <li>
            <img src={Clock}></img>
            <input placeholder="O której"></input>
          </li>
          <li>
            <img src={Car}></img>
            <input placeholder="Liczba osób"></input>
          </li>
          <li>
            <img src={Wallet}></img>
            <input placeholder="Metoda płatności"></input>
          </li>
        </InputWrapper>
        <Btn>
          <p>Zamów</p>
        </Btn>
      </FormWrapper>
    )
  }
}

export default Form
