import "./Portfolio.css";
import cardData from "../Data/cardData";
import Card from "../Cards/Cards";
import { useState } from "react";
import Modal from "../Modal/Modal";

function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="portfolio">
      <h1 className="portfolio__header">Portfolio</h1>

      <p className="portfolio__subtitle">
        Check out some of our latest nail sets and get inspired for your next
        appointment!
      </p>

      <button
        className="portfolio__button"
        onClick={() => {
          console.log("Button clicked!");
          setIsOpen(!isOpen);
          console.log("Current isOpen state:", isOpen);
        }}
      >
        View Full Gallery
      </button>

      <div className="portfolio__gallery">
        {cardData.map((cardData) => (
          <Card
            key={cardData.id}
            title={cardData.title}
            description={cardData.description}
            image={cardData.image}
          />
        ))}
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

/* <div className="header__services-cards">
          {cardData.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
            />
          ))}
        </div> */

export default Portfolio;
