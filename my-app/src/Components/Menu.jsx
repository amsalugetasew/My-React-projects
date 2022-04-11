import React from 'react'
import styled from 'styled-components'
const Container= styled.div`
margin-top: 5px;
width: 100%;
background-color: #777;
padding: 5px;
opacity: 0.8;
`;
const MainMenu=styled.span`
width: 80%;
`;
const Menus=styled.ul`
display: flex;
list-style: none;
align-content: center;
justify-content: center;
color:	rgb(115, 140, 140)
`;
const MenuItems = styled.li`
margin-left: 20px;
font-size: 20px;
font-weight: bold;
cursor: pointer;
&:hover {
    background-color: white;
    border-radius: 30%;
  }
`;
const Acount=styled.span`
`;
const Menu = () => {
  return (
    <Container>
      <Menus>
          <MenuItems>Home</MenuItems>
          <MenuItems>About</MenuItems>
          <MenuItems>Services</MenuItems>
          <MenuItems>Development</MenuItems>
          <MenuItems>Contact</MenuItems>
      </Menus>
    </Container>
  )
}

export default Menu
