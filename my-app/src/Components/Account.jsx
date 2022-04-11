import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
margin-top: 5px;
background-color: #808080;
color: white;
height: 100%;
`;
const Menu=styled.span`
display: flex;
list-style: none;
align-content: center;
justify-content: center;
color:#333;
`;
const MenuItems=styled.span`
margin-left: 20px;
font-size: 15px;
font-weight: bold;
padding 20px;
cursor: pointer;
&:hover {
    background-color: white;
    border-radius: 30%;
  }
`;
const Account = () => {
  return (
    <Container>
        <Menu>
            <MenuItems>Sign In</MenuItems>
            <MenuItems>Sign Up</MenuItems>
        </Menu>
    </Container>
  )
}

export default Account