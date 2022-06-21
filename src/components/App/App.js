import CardsContainer from '../CardContainer/CardsContainer';
import styled from 'styled-components';
import FooterContainer from '../Footer/FooterContainer';
import Header from '../Header/Header';

function App() {
  return (
    <AppDiv>
      <Header />
      <AboutMe>
        <Container>
          <CardsContainer/>
        </Container>
      </AboutMe>
      <FooterContainer />
    </AppDiv>
  );
}

const AppDiv = styled.div`
  display:flex;
  margin:0;
  flex-direction:column;
  padding: 0;
`

const Container = styled.div`
  height: auto;
  display:flex;
  margin: 3rem 0;
  flex-direction: column;
  border-radius: 5px;
  justify-content: space-evenly;
  align-items: center;
  padding:1rem 0;
`

const AboutMe = styled.div`
  background-color: white;
  border-radius:5px;
  margin-top:0;
  margin-bottom: 30px;
  margin-left:0;
  margin-right:0;
`

export default App;
