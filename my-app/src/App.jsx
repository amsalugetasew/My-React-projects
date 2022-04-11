import styled from 'styled-components'
import Account from './Components/Account.jsx';
import Menu from './Components/Menu';
import Resume from './Components/Resume.jsx';
const Container = styled.div`
width: 100%
background-color: crimson;
display: flex;
`;
const Left = styled.span`
width: 80%;
background-color: white;
`;
const Right = styled.span`
width: 20%;

`;

function App() {
  return (
    <>
      <Container >
        <Left>
          <Menu />
        </Left>
        <Right>
          <Account />
        </Right>
      </Container>
      <Resume/>
    </>
  );
}

export default App;
