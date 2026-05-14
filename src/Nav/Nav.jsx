import "./Nav.css";

function Nav() {
  return (
    <div className="navbar">
      <nav className="nav">
        <ul className="nav__list">
          <li>
            <a href="#/" className="nav__link">
              Home
            </a>
          </li>
          <li>
            <a href="#/services" className="nav__link">
              Services
            </a>
          </li>
          <li>
            <a href="#/portfolio" className="nav__link">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#/book" className="nav__link">
              Book
            </a>
          </li>
          <li>
            <a href="#/about" className="nav__link">
              About
            </a>
          </li>
          <li>
            <a href="#/contact" className="nav__link">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <button className="nav__button">Book Appointment</button>
    </div>
  );
}

export default Nav;
