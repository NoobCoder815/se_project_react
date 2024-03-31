import "../blocks/ItemModal.css";
import React from "react";
import closeButton from "../images/close-button-white.png";
import CurrentUserContext from "../contexts/CurrentUserContext";

const ItemModal = ({ onClose, selectedCard, onClick }) => {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = selectedCard.owner === currentUser.data._id;
  const deleteBtnClassName = `modal__delete-btn ${
    isOwn ? "modal__delete-btn" : "modal__delete-btn_hidden"
  }`;
  return (
    <div className="modal">
      <div className="modal__image-container">
        <img
          className="modal__image"
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
        />
        <div className="image__info">
          <div>
            <p className="image-name">{selectedCard.name}</p>
            <p className="image-weather">
              Weather: <span>{selectedCard.weather}</span>
            </p>
          </div>
          <button
            type="button"
            className={`${deleteBtnClassName}`}
            onClick={onClick}
          >
            Delete Item
          </button>
        </div>
        <button
          className="modal__close-button modal__close-button_image"
          onMouseDown={onClose}
        >
          <img src={closeButton} alt="close button"></img>
        </button>
      </div>
    </div>
  );
};

export default ItemModal;
