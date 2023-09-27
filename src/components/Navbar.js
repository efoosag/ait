import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 428px; 
  height: 88px;
  background-color: white;
  border-bottom: 1px solid #C9C9C9;
  box-shadow: 0 2px 8px #2DA90E;
  /* @media only screen and (min-width: 428px) {
    max-width: 100vw;
    height: 100vh;    
  }   */
`
const Wrapper = styled.div`
  width: 100%;
  display: flex;  
  background-color: aliceblue;
`
const Menu = styled.img`
  width: 32px;
  height: 20px;
  margin-left: 10px;
  margin-top: 50px;
`

const Logo = styled.img`
  width: 39px;
  height: 24px;
  margin-top: 46px;
  margin-left: 30px;
`

const CompanyName = styled.h1`
  
  height: 18px;
  margin-top: 50px;
  margin-left: 1px;
  font-family: 'Inter', sans-serif;
  font-weight: 900;
  font-size: 15px;
  line-height: 17.58px;
  text-shadow: 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black;
  color: white;  
`

const Plant = styled.img`
  width: 25px;
  height: 25px;
  margin-left: 10px;
  margin-top: 45px;
`

const Notification = styled.img`
  margin-top: 48px;
  margin-left: 10px;
  margin-right: 10px;
  width: 18px;
  height: 22px;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Menu src="../../images/menubar.png" />
        <Logo src="../../images/logo.png" />
        <CompanyName>
          Agricultural International Trade
        </CompanyName>
        <Plant src="../../images/plant.png" />
        <Notification src="../../images/notification-bar.png" />
      </Wrapper>
    </Container>
  )
}

export default Navbar