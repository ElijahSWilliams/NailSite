import "./Portfolio.css";
import cardData from "../Data/cardData";
import Card from "../Cards/Cards";
import { useState } from "react";
import Modal from "../Modal/Modal";

function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="portfolio" id="portfolio">
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
        }}
      >
        View Full Gallery
      </button>

      <div className="portfolio__gallery">
        {cardData.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
            onClick={() => setSelectedCard(card.image)}
          />
        ))}
      </div>

      {selectedCard && (
        <div
          className="portfolio__image-modal"
          onClick={() => setSelectedCard(null)}
        >
          <img
            src={selectedCard}
            alt="Clicked nail art"
            className="portfolio__image-modal-img"
          />
        </div>
      )}

      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}


export default Portfolio;
