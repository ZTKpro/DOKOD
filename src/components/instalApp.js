import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import SmartPhone from "../assets/SmartPhone.png"
import GoogleShopImg from "../assets/GoogleShop.png"
import AppleShopImg from "../assets/AppleShop.png"

const AppWrapper = styled.section`
  margin: 0 auto;
  margin-top: 150px;
  height: max-content;
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1200px) {
    width: 800px;
  }
  @media (max-width: 801px) {
    flex-direction: column;
    justify-content: center;
    width: 500px;
  }
  @media (max-width: 401px) {
    flex-direction: column;
    justify-content: center;
    width: 300px;
  }
`
const Telephone = styled.img`
  height: 880px;
  width: auto;
  @media (max-width: 1200px) {
    height: 650px;
    margin: 0 auto;
  }
  @media (max-width: 401px) {
    height: 500px;
    margin: 0 auto;
    margin-right: -5px;
  }
`
const TextWrapper = styled.div`
  width: 50%;
  margin-left: 50px;
  h3 {
    margin: 0;
    padding: 0;
    font-size: 55px;
    text-align: left;
    color: #ff0707;
  }
  h4 {
    margin: 0;
    padding: 0;
    font-size: 38px;
    text-align: left;
    font-weight: 400;
    color: #ff0707;
  }
  @media (max-width: 1200px) {
    h3 {
      font-size: 40px;
    }
    h4 {
      font-size: 32px;
    }
  }
  @media (max-width: 801px) {
    h4,
    h3 {
      text-align: center;
    }
  }
  @media (max-width: 401px) {
    h3 {
      font-size: 30px;
    }
    h4 {
      font-size: 22px;
    }
  }
`

const WhyUseWrapper = styled.div`
  margin: 25px;
  margin-left: 50px;

  h5 {
    font-size: 25px;
    margin: 0;
    padding: 0;
    color: #000000b0;
  }
  p {
    margin: 0;
    padding: 0;
    color: #000000b0;
    font-size: 20px;
  }
  @media (max-width: 1200px) {
    h5 {
      font-size: 20px;
    }
  }
  @media (max-width: 801px) {
    margin-left: 0;
    text-align: center;
    margin: 0 auto;
    margin-top: 35px;
  }
  @media (max-width: 401px) {
    margin: 0 auto;
    h5 {
      font-size: 18px;
    }
    p {
      font-size: 16px;
    }
  }
`

const BtnWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const AppleShop = styled.img`
  height: 90px;
  width: auto;
  margin-right: 20px;

  @media (max-width: 1200px) {
    height: 60px;
  }
  @media (max-width: 401px) {
    height: 45px;
  }
`

const AndroidShop = styled.img`
  height: 90px;
  width: auto;

  @media (max-width: 1200px) {
    height: 60px;
  }
  @media (max-width: 401px) {
    height: 45px;
  }
`

const whyUseApp = [
  {
    Tittle: "Szybkie rezerwowanie pojazdów",
    Text:
      "z oficjalną aplikacją Dokod zamawianie pojazdów nigdy nie było tak szybkie.",
  },
  {
    Tittle: "Łatwy w obsłudze interfejs aplikacja",
    Text: "ułatwia proces zamawiania oraz poprawia komfort użytkowania.",
  },
  {
    Tittle: "Darmowe bonusy",
    Text:
      "są dostępne dla zarejestrowanych i zwykłych użytkowników aplikacji bezpośrednio z aplikacji.",
  },
]

class App extends React.Component {
  render() {
    return (
      <AppWrapper>
        <Telephone src={SmartPhone}></Telephone>
        <TextWrapper>
          <h3>Zainstaluj aplikacje</h3>
          <h4>I dostań rabat 15%.</h4>

          {whyUseApp.map((item, i) => (
            <WhyUseWrapper key={i}>
              <h5>{item.Tittle}</h5>
              <p>{item.Text}</p>
            </WhyUseWrapper>
          ))}
          <BtnWrapper>
            <AppleShop src={AppleShopImg}></AppleShop>
            <AndroidShop src={GoogleShopImg}></AndroidShop>
          </BtnWrapper>
        </TextWrapper>
      </AppWrapper>
    )
  }
}

export default App
