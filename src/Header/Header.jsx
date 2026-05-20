import { useState } from "react";
import "./Header.css";

function Header() { 


  return (
    <>
      <header className="header">
        <div className="header__content">
          <h1 className="header__title">
            Nail art that speaks for <span className="header__accent">you</span>
          </h1>

          <p className="header__subtitle">
            Luxury Nail Sets, custom designs, and a relaxing experience you
            deserve
          </p>

          <div className="header__buttons-container"> 

            <button className="header__button">  
              <a href="https://www.instagram.com/enhancedbyluz/" target="_blank" className="header__button-link">
              Book Appointment 
              </a>
              </button>

            <button className="header__button header__button2">
              <a href="#portfolio" className="header__button-link">
                View Portfolio
              </a>
            </button>
          </div>
        </div>
      </header>

      <section className="header__services" id="services">
        <h2 className="header__services-title">Our Services</h2>

        <ul className="header__services-cards">
          <li className="header__services-card">
            <img
              src="https://thumbs.dreamstime.com/b/red-nail-polish-icon-black-line-manicure-pedicure-clipart-png-illustration-cute-outline-doodle-isolated-transparent-278662091.jpg"
              className="header__card-icon"
              alt=""
            />
            <h3 className="header__card-title">Hand Enhancements</h3>
            <h4 className="header__card-subtitle">Acrylic, Gel</h4>
            <p className="header__card-description">2-3 hrs</p>
            <p className="header__card-description">
              From <span className="header__card-accent">$50</span>
            </p>
          </li>

          <li className="header__services-card">
            <img
              src="https://thumbs.dreamstime.com/b/red-nail-polish-icon-black-line-manicure-pedicure-clipart-png-illustration-cute-outline-doodle-isolated-transparent-278662091.jpg"
              className="header__card-icon"
              alt=""
            />
            <h3 className="header__card-title">Toe Enhancements</h3>
            <h4 className="header__card-subtitle">Acrylic, Gel</h4>
            <p className="header__card-description">2-3 hrs</p>
            <p className="header__card-description">
              From <span className="header__card-accent">$50</span>
            </p>
          </li>

          <li className="header__services-card">
            <img
              src="https://thumbs.dreamstime.com/b/red-nail-polish-icon-black-line-manicure-pedicure-clipart-png-illustration-cute-outline-doodle-isolated-transparent-278662091.jpg"
              className="header__card-icon"
              alt=""
            />
            <h3 className="header__card-title">Salt Soaks</h3>
            <h4 className="header__card-subtitle">Acrylic, Gel</h4>
            <p className="header__card-description">2-3 hrs</p>
            <p className="header__card-description">
              From <span className="header__card-accent">$50</span>
            </p>
          </li>

          <li className="header__services-card">
            <img
              src="https://thumbs.dreamstime.com/b/red-nail-polish-icon-black-line-manicure-pedicure-clipart-png-illustration-cute-outline-doodle-isolated-transparent-278662091.jpg"
              className="header__card-icon"
              alt=""
            />
            <h3 className="header__card-title">Pedicures</h3>
            <h4 className="header__card-subtitle">Acrylic, Gel</h4>
            <p className="header__card-description">2-3 hrs</p>
            <p className="header__card-description">
              From <span className="header__card-accent">$40</span>
            </p>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Header;
