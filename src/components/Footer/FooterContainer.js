import FooterButton from './FooterButton/FooterButton';
import './FooterContainer.css';

const FooterContainer = () => {
  return(
    <footer id="contact">
      <h4>Contact me</h4>
      <div className="social-media">
        <FooterButton className="footer-button" href="mailto:dannhl08@gmail.com" name="E-mail" />
        <FooterButton className="footer-button" rel="noreferrer" href="https://www.linkedin.com/in/carlos-penaforte-5798ab214" target="_blank" name ="LinkedIn" />
        <FooterButton className="footer-button" rel="noreferrer" href="https://github.com/CarlosPenaforte" target="_blank" name="GitHub" />
      </div>
    </footer>
  )
}


export default FooterContainer;
