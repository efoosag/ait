import React from 'react'
// import { NavLink } from 'react-router-dom'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Products from '../components/Products'

const Container = styled.div`
  width: 428px; 
`
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  
`
const Menu = styled.div`
  width: 73px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  box-shadow: inset 0 2px 28px #2DA90E;
`
const Display = styled.div`
  width: 355px;
`

const MenuItem =styled.a`
  margin-top: 30px;
  margin-bottom: 20px;
  display: flex;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  font-family: 'Times New Roman', Times, serif;
  line-height: 16.1px;
  cursor: pointer;
 `

const MainPage = () => {  
  return (
    <Container>
      <Navbar />    
      <Wrapper>
        <Menu>
          <MenuItem>Home</MenuItem>
          <MenuItem>My Products</MenuItem>
          <MenuItem>Friends</MenuItem>
          <MenuItem>Messages</MenuItem>
          <MenuItem>Posts</MenuItem>          
        </Menu>
        <Display>          
          <Products/>                
        </Display>
      </Wrapper>      
    </Container>
  )
}

export default MainPage