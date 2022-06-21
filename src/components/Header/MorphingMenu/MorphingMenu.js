import Checkbox from "./Menu/Checkbox";
import styled from "styled-components";

const MorphingMenu = () => {

  return(
    <MenuContainer>
      <Checkbox />
    </MenuContainer>
  );
}

const MenuContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;   
  margin:0;
`

export default MorphingMenu