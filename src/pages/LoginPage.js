import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 380px;
  height: 1023px;
  background-color: white;
  @media only screen and (min-width: 428px) {
    max-width: 100vw;
    height: 100vh;    
  }  
`
const Wrapper = styled.div`
  width: 90%;
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center; 

  @media only screen and (min-width: 428px) {
    margin: 0 auto;
    width: 40%;
  }
  
`

const Welcome = styled.h2`
  margin-top: 150px;
  font-family: 'Inter', sans-serif;
  font-weight: 900;
  font-size: 34px;
  line-height: 41.15px;
  
  @media only screen and (min-width: 428px) {
    margin-top: 50px;    
  }
`

const Logo = styled.img`
  margin-top: 74.85px;
  width: 114px;
  height: 70px;

  @media only screen and (min-width: 428px) {
    margin-top: 10px;    
  }

`

const CompanyName = styled.p`
  margin-top: 20px;
  margin-bottom: 70px;
  font-family: 'Inter', sans-serif;
  font-weight: 900;
  font-size: 20px;
  text-shadow: 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black;
  color: white;

  @media only screen and (min-width: 428px) {
    margin-bottom: 40px;    
  }

`

const Input = styled.input`
  width: 90%;
  height: 47px;
  padding: 5px 5%;
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  margin-top: 20px;
  border: 1px solid black;
  border-radius: 11px;

`

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-family: 'Inter', sans-serif;
  font-weight: 900;
  align-self: flex-start;
  margin-left: 0;
  background-color: #2DA90E;
  color: white;
  border-radius: 11px;
  border: none;
  
`

const LinkWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`

const LinkDetail = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: black;
  line-height: 21.78px;
`

const Link = styled.a`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #7188FF;
  line-height: 21.78px;
`

const LoginPage = () => {
  return (
    <Container>
      <Wrapper>
        <Welcome>
          Welcome to
        </Welcome>
        <Logo src='../../images/logo.png'/>
        <CompanyName>Agricultural International Trade</CompanyName>
        <Input placeholder='Input Your Email'/>
        <Input placeholder='Input Your Password'/>
        <Button>Login</Button>
        <LinkWrapper>
          <LinkDetail>Do not have an account?</LinkDetail>
          <Link>Sign up</Link>
        </LinkWrapper>
      </Wrapper>
    </Container>
  )
}

export default LoginPage