import "./Cards.css";

function Card({ title, image, onClick }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card__image" onClick={onClick} />
    </div>
  );
}

export default Card;
