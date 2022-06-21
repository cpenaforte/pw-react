import CardText from './CardText/CardText';
import Card from './Card/Card';
import styled from 'styled-components';

const CardsContainer = () => {

  return(
    <Container>
      <Wrapper>
        <Card name="About me" value="This is me"/>
        <CardText value="I'm a Junior Full Stack Developer, specialized on ReactJs, JavaScript and Python. This website code is a collection of the majority of skills I learn." />
      </Wrapper>
      <Wrapper>
        <CardText value="At that stage of my carreer, I've started projects on Website Development, ReactJs apps, API, Game Scripts, 3D Vectors Operations and much more projects. In my Github, you can check all the projects I've been working on." />
        <Card name="Projects" value="These are my projects" />
      </Wrapper>
      <Wrapper>
        <Card name="Goals" value="What are my ambitions?" />
        <CardText value="My future goals is to constantly improve my abilities as a Full Stack Dev, be part of innovative projects and be the top Full Stack Developer." />
      </Wrapper>
    </Container>
  )
  
}

const Wrapper = styled.div`
  display:flex;
  align-items:center;
  justify-content: space-evenly;
`;

const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  width:90%
`;
export default CardsContainer;