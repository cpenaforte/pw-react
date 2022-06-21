import styled from 'styled-components';

const CardText = (props) => {
  const { value } = props;

  return(
    <Text>{value}</Text>
  )
}

const Text = styled.div`
  width:40%;
  font-family:sans-serif;
  letter-spacing: 1px;
  color: rgb(109,109,109);
  font-size: 1.3em;
`

export default CardText;