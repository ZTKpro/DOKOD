import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import SmartPhone from "../assets/SmartPhone.png"
import GoogleShopImg from "../assets/GoogleShop.png"
import AppleShopImg from "../assets/AppleShop.png"

const AppWrapper = styled.section`
  margin: 0 auto;
  margin-top: 50px;
  height: max-content;
  width: 1300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Telephone = styled.img`
  height: 1000px;
  width: auto;
`
const TextWrapper = styled.div`
  width: 50%;
  margin-left: 50px;
  h3 {
    margin: 0;
    padding: 0;
    font-size: 63px;
    text-align: left;
    color: #ff0707;
  }
  h4 {
    margin: 0;
    padding: 0;
    font-size: 43px;
    text-align: left;
    font-weight: 400;
    color: #ff0707;
  }
`

const WhyUseWrapper = styled.div`
  margin: 25px;
  margin-left: 50px;
  h5 {
    font-size: 30px;
    margin: 0;
    padding: 0;
    color: #000000b0;
  }
  p {
    margin: 0;
    padding: 0;
    color: #000000b0;
    font-size: 22px;
  }
`

const BtnWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
`

const AppleShop = styled.img`
  height: 100px;
  width: auto;
  margin-right: 20px;
`

const AndroidShop = styled.img`
  height: 100px;
  width: auto;
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
