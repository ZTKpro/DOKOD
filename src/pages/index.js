import React from "react"

import GlobalStyle from "../components/globalStyle"

import Nav from "../components/nav"
import Header from "../components/Header"
import Form from "../components/Form"
import Ofert from "../components/Ofert"
import App from "../components/instalApp"
import Footer from "../components/Footer"

//xd.adobe.com/view/0e04b476-c09d-4691-b3ce-e3a3625cb71d-5b57/#access_token=eyJ4NXUiOiJpbXNfbmExLWtleS0xLmNlciIsImFsZyI6IlJTMjU2In0.eyJpZCI6IjE2MDAwNzc3MTMzMjNfYzVmMjkwZWYtMmJhYi00N2EzLTk0ZWEtOTNhMjI5ZDIwMGQxX2V3MSIsImNsaWVudF9pZCI6IkNvbWV0V2ViMSIsInVzZXJfaWQiOiJEQkZDNzY5QjVDM0VFMkNCMEE0OTVDRDBAQWRvYmVJRCIsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJhcyI6Imltcy1uYTEiLCJmZyI6IlVZVkpRVFpZVkxPNU1QNEdBNEJMWlBRQTRVPT09PT09Iiwic2lkIjoiMTYwMDA3NzcxMzMyM180OTEzOWM1Ni1jYWFmLTQ2MjQtOWRiNy0wZTgwOWNhY2UyMGRfZXcxIiwibW9pIjoiZGNiMzk2OWIiLCJjIjoic3N2Rzl4NFFZb0dRR3BIRlJTWDNrQT09IiwiZXhwaXJlc19pbiI6Ijg2NDAwMDAwIiwic2NvcGUiOiIiLCJjcmVhdGVkX2F0IjoiMTYwMDA3NzcxMzMyMyJ9.H2846s5UjJZnplOspsyuOZPKvOsNJVT8MXPdgw3tHBpU8evKj4E2MdICwMF0lH-mxAOx8CAJPFHwWa8FSFheq4uywSkhjLKE8FZnGJFiU7O6fkxwlBQn4D3gHO4ZhvZBD_k1k4b87e_l96UNyUi8jTBNo5IFhm13k5Ptx5zJm-nWWBTbyYUG3Xc8pbL1n4b4JyH4-mmgP8nS0nkmVi59zsyZg2Iu88ngG-2gLo7oiP6dIB8as5wT_11JI5I1TBHh6bdIwXj6nRDWUBarMbfDgJRk6OcZwp0hnGLHo6I3l_JyiDcPXjETex03sy-BBYgVMvvVT70JLANNyezWAyweLQ&token_type=bearer&expires_in=86399996

export default function Home() {
  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <Nav></Nav>
      <Header></Header>
      <Form></Form>
      <Ofert></Ofert>
      <App></App>
      <Footer></Footer>
    </div>
  )
}
