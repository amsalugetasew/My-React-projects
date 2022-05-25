import Navebar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import styled from "@emotion/styled"
const Phome = styled.div`
display: flex;
flex-direction: column;
`;
const Widgets = styled.div`
  display: flex;
  height: 68vh;
`;
const Left = styled.div`
width: 25%;
height: 68vh;
background-color: #eff;
box-shadow: 2px 4px 10px 1px rgba(22, 20, 20, 0.945);
-webkit-box-shadow: 1px 4px 10px 1px rgba(0, 0, 0, 0.47);
`;
const Content = styled.div`
width: 50%;
height: 68vh;
background-color: rgb(243, 242, 242);
box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.945);
-webkit-box-shadow: 1px 4px 10px 1px rgba(0, 0, 0, 0.47);
justify-content: center;
align-items: center;
`;
const Right = styled.div`
width: 25%;
height: 68vh;
background-color: rgba(241, 230, 230, 0.164);
box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.945);
-webkit-box-shadow: 1px 4px 10px 1px rgba(0, 0, 0, 0.47);
`;
const Footers = styled.div`
display: flex; 
    flex-direction: column;
            height: 16vh;
`;
function PHome() {
  return (
    <div className='home'>
      <Phome className="homeContainer">
        <Navebar />
        <Widgets className="widgets">
          <Left className="left">Left</Left>
          <Content className="content">HomeContent</Content>
          <Right className="right">Right</Right>
        </Widgets>
        <Footers className="Footer">
          <Footer />
        </Footers>

      </Phome>
    </div>
  )
}

export default PHome