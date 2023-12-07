import closeButton from "../images/close-button-white.png";
const ItemModal = ({ onClose, selectedCard }) => {
  return (
    <div className="modal">
      <div className="modal__container_image">
        <img
          className="modal__image"
          src={selectedCard.link}
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
          <img src={closeButton}></img>
        </button>
      </div>
    </div>
  );
};

export default ItemModal;
