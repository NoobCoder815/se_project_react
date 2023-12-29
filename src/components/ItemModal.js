import "../blocks/ItemModal.css";
import closeButton from "../images/close-button-white.png";

const ItemModal = ({ onClose, selectedCard, onClick }) => {
  return (
    <div className="modal">
      <div className="modal__container-image">
        <img
          className="modal__image"
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
        />
        <p className="image-name">{selectedCard.name}</p>
        <p className="image-weather">
          Weather: <span>{selectedCard.weather}</span>
        </p>
        <button
          className="modal__close-button modal__close-button_image"
          onMouseDown={onClose}
        >
          <img src={closeButton} alt="close button"></img>
        </button>
        <button type="button" className="modal__delete-btn" onClick={onClick}>
          Delete Item
        </button>
      </div>
    </div>
  );
};

export default ItemModal;
