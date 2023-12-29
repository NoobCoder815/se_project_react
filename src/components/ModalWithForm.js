import "../blocks/ModalWithForm.css";
import closeButton from "../images/close-button-gray.svg";

const ModalWithForm = ({
  children,
  buttonText = "Add garment",
  title,
  onClose,
  name,
  onSubmit,
}) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__container">
        <button
          type="button"
          className="modal__close-button"
          onMouseDown={onClose}
        >
          <img src={closeButton} alt="close button"></img>
        </button>
        <p className="modal__label">{title}</p>
        <form onSubmit={onSubmit}>
          {children}
          <button type="submit" className="modal__confirm-button">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
