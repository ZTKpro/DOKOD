import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
const FooterWrapper = styled.footer`
  height: 60px;
  box-shadow: 0px 0px 20px #00000033;
  width: 100%;
  background-color: white;
`
const FooterContent = styled.div`
  font-size: 18px;
  margin: 0 auto;
  height: 100%;
  width: 1300px;
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
`

class Footer extends React.Component {
  render() {
    return (
      <FooterWrapper>
        <FooterContent>
          <p>© 2020. Dokod. All Rights Reserved. Privacy Policy.</p>
          <ul>
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
