import './Header.css';
import MorphingMenu from './MorphingMenu/MorphingMenu';
import Introduction from './Introduction/Introduction';

const Header = () => {
  return(
    <header id="topper">
      <Introduction />
      <MorphingMenu />
    </header>
  )
}

export default Header;