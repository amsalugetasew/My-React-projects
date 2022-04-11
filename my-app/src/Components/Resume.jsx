import React, { useState} from 'react'
import styled from 'styled-components'
import App from './Image/how.jpg'
const Container=styled.div`
position: relative;
height: 90vh;
background: white;
display: flex;
`;
const Left=styled.span`
    width: 30%;
    position: relative;
`;
const Right=styled.span`
width: 70%; 
position: relative;
`;
const Title=styled.span`
font-size: 30px;
@media only screen and ( max-width:480px){
    font-size: 50px;;
  }
`;
const SubTitle=styled.span`
font-size: 24px;
font-style: italic;
color: #333;
`;
const Desc=styled.p`
font-size: 20px;
color: #777;
margin-top: 30px;
`;
const Img=styled.img`
margin-top: 30px;
margin-left: 30px;
width: 60%;
height: 70%;
`;
const Button=styled.button`
width: 170px;
border: none;
padding: 15px 20px;
background-color: darkblue;
colore: white;
font-size: 20px; 
border-radius: 20px;
margin-top: 20px;
cursor: pointer;
`;
const Menu=styled.ul`
flex-direction: column;
list-style: none;
`;
const MenuItems=styled.li`
font-size: 30px;
color: #777;
margin-top: 20px;
cursor: pointer;
`;
const Display=styled.span`
display: ${(props) => !props.open && "none"};
`;
const Resume = () => {
    const [open, setOpen] = useState(false);
  return (
       
    <Container>
         <Left>
             <Menu>
                 <MenuItems open={open}> <Display autoPlay 
            loop 
            controls 
            open={open} 
            src={App} ></Display>Personal Information</MenuItems>
                 <MenuItems>Educational Information</MenuItems>
                 <MenuItems>Language</MenuItems>
                 <MenuItems>Software </MenuItems>
                 <MenuItems>Certefication Information</MenuItems>
                 <MenuItems>Work experience</MenuItems>
                 <MenuItems>Extracurricular activity</MenuItems>
                 <MenuItems>Additional Skills</MenuItems>
                 <MenuItems>References</MenuItems>
                 <MenuItems>Photo</MenuItems>
                 
             </Menu>

         </Left>
        <Right>
            <Title><b>Good</b> Design <br/><b>Good</b> Job</Title>
            <SubTitle>clip-path property </SubTitle>
            <Desc> The clip-path property allows you to make complex shapes in CSS by clipping an element to a basic shape (circle, ellipse, polygon, or inset), or to an SVG source.

CSS Animations and transitions are possible with two or more clip-path shapes with the same number of points.</Desc>
            <Button>Learn more...</Button>
        </Right>
    </Container>
  )
}

export default Resume