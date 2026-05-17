import "./Modal.css";
import cardData from "../Data/cardData";
import Card from "../Cards/Cards";
import { useEffect } from "react";

function Modal({ isOpen, setIsOpen }) {
  useEffect(() => {
    /* Create function */
    function handleEsc(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    /* If isOpen is true, add keydown event listener */
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
    }

    /* Cleanup function to remove event listener */
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen]);

  if (!isOpen) {
    return null; // Don't render anything if the modal is not open
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <div className={`modal ${isOpen ? "modal__open" : ""}`}>
      <div className="modal__container">
        <button className="modal__close" onClick={() => handleClose()}>
          X
        </button>

        <div className="modal__content">
          <h2 className="modal__header">Full Gallery</h2>
          <div className="modal__gallery">
            {cardData.map((cardData) => (
              <Card
                key={cardData.title}
                title={cardData.title}
                description={cardData.description}
                image={cardData.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
