import "../blocks/DeleteModal.css";
import React from "react";
import ModalWithForm from "./ModalWithForm";

const DeleteModal = ({ onClose, handleDeleteItem }) => {
  return (
    <ModalWithForm
      name="delete"
      onClose={onClose}
      buttonText="Yes, delete item"
      onSubmit={handleDeleteItem}
    >
      <div className="modal__delete_confirmation">
        <p className="modal__label_delete">
          Are you sure you want to delete this item? <br></br>This action is
          irreversible.
        </p>
        <button
          type="button"
          className="modal__cancel-button"
          onMouseDown={onClose}
        >
          Cancel
        </button>
      </div>
    </ModalWithForm>
  );
};

export default DeleteModal;
