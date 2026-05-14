import "./Cards.css";
import cardData from "../Data/cardData";

function Card({ title, description, imageUrl }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card__image" />
      <h3 className="card__title">{title}</h3>
      <p className="card__description">{description}</p>
    </div>
  );
}

export default Card;
