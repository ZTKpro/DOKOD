import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
const FooterWrapper = styled.footer`
  margin-top: 80px;
  height: 80px;
  box-shadow: 0px 0px 20px #00000033;
  width: 100%;
  background-color: white;
`
const FooterContent = styled.div`
  padding: 0 25px;
  font-size: 18px;
  margin: 0 auto;
  height: 100%;
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    li {
      margin-right: 25px;
      list-style: none;
    }
  }

  @media (max-width: 1200px) {
    width: 800px;
  }

  @media (max-width: 801px) {
    width: 98%;
    padding: 0 25px;
    .none {
      display: none;
    }
  }
`
const Rights = styled.p`
  display: block;
  @media (max-width: 801px) {
    display: none;
  }
`
const RightsShort = styled.p`
  display: none;
  @media (max-width: 801px) {
    display: block;
  } ;
`

class Footer extends React.Component {
  render() {
    return (
      <FooterWrapper>
        <FooterContent>
          <Rights>© 2020. Dokod. All Rights Reserved. Privacy Policy.</Rights>
          <RightsShort>© 2020. Dokod. All Rights Reserved.</RightsShort>
          <ul className="none">
            <li>Facebook</li>
            <li>Twitter </li>
            <li>LinkedIn</li>
          </ul>
        </FooterContent>
      </FooterWrapper>
    )
  }
}

export default Footer
