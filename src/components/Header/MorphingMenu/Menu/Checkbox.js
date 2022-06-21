import './Checkbox.css';

const Checkbox = () => {
  return(
    <div id="checkbox-container">
      <input type="checkbox" id="toggle" />
      <label className='checkbox' htmlFor="toggle">
        <div className="trace"></div>
        <div className="trace"></div>
        <div className="trace"></div>
      </label>
      <div className="menu">
        <nav className="menu-items">
          <ul>
            <li>
              <a href="../../../../../public/index.html">Home</a>
            </li>
            <li>
              <nav className="projects">Projects</nav>
            </li>
            <li>
              <a rel="noreferrer" href="https://www.linkedin.com/in/carlos-penaforte-5798ab214" target="_blank">LinkedIn</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}


export default Checkbox;