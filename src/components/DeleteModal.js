import "../blocks/DeleteModal.css";
import React from "react";
import ModalWithForm from "./ModalWithForm";

const DeleteModal = ({ onClose, onClick }) => {
  return (
    <ModalWithForm
      name="delete"
      onClose={onClose}
      buttonText="Cancel"
      onSubmit={onClose}
    >
      <div className="modal__delete_confirmation">
        <p className="modal__label_delete">
          Are you sure you want to delete this item? <br></br>This action is
          irreversible.
        </p>
        <button className="modal__delete-button" onMouseDown={onClick}>
          Yes, delete item
        </button>
      </div>
    </ModalWithForm>
  );
};

export default DeleteModal;
