import "./Portfolio.css";
import cardData from "../Data/cardData";
import Card from "../Cards/Cards";

function Portfolio() {
  return (
    <div className="portfolio">
      <h1 className="portfolio__header">Portfolio</h1>
      <p className="portfolio__subtitle">
        Check out some of our latest nail sets and get inspired for your next
        appointment!
      </p>

      <div className="portfolio__gallery">
        {cardData.map((cardData) => (
          <Card
            key={cardData.id}
            title={cardData.title}
            description={cardData.description}
            imageUrl={cardData.imageUrl}
          />
        ))}
      </div>
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
