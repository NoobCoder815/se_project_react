import "../blocks/ModalWithForm.css";
import closeButton from "../images/close-button-gray.svg";

const ModalWithForm = ({
  children,
  buttonText = "Add garment",
  title,
  onClose,
  name,
}) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__container">
        <button
          type="button"
          className="modal__close-button"
          onMouseDown={onClose}
        >
          <img src={closeButton}></img>
        </button>
        <p className="modal__label">{title}</p>
        <form>{children}</form>
        <button type="submit" className="modal__confirm-button">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ModalWithForm;
