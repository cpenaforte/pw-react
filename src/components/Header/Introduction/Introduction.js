import './Introduction.css';
import styled from 'styled-components';

const Introduction = () => {
  return(
    <IntroductionDiv>
      <div className="profile">
        <img src={require("../../../images/IMG_20220515_114947_051_copy_153x153.jpg")} alt="Foto de Perfil" />
      </div>
      <h1>Carlos Penaforte</h1>
      <h6>Full-Stack Developer</h6>
      <ul className="skill-list">
        <li className="skill">ReactJs</li>
        <li className="skill">Javascript</li>
        <li className="skill">CSS</li>
        <li className="skill">HTML</li>
        <li className="skill">Python</li>
        <li className="skill">PyScript</li>
      </ul>
    </IntroductionDiv>
  )
}

const IntroductionDiv = styled.div`
  margin:0;
  padding:0;
  display:flex;
  align-content:center;
  justify-content:center;
  flex-direction:column
`

export default Introduction