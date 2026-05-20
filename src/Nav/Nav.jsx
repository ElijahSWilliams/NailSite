import "./Nav.css"; 
import { useState } from "react";

function Nav() {
const [isMenuOpen, setIsMenuOpen] = useState(false)


  return (
    <div className="navbar"> 

       {/* Hamburger Menu Icon */}
       <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        =
      </button>


      <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
      <ul className="nav__list">
          {/*  <li>
            <a href="#" className="nav__link">
              Home
            </a>
          </li> */}
          <li>
            <a href="#services" className="nav__link">
              Services
            </a>
          </li>
          <li>
            <a href="#portfolio" className="nav__link">
              Portfolio
            </a>
          </li>
          {/*  <li>
            <a href="#book" className="nav__link">
              Book
            </a>
          </li> */}
          {/* <li>
            <a href="#about" className="nav__link">
              About
            </a>
          </li> */}
          <li>
            <a href="#contact" className="nav__link">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <button className="nav__button">
        <a
          href="https://www.instagram.com/enhancedbyluz/"
          target="_blank"
          className="nav__button-link"
        >
          Book Appointment
        </a>
      </button>
    </div>
  );
}

export default Nav;
