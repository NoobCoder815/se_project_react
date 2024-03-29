import "../blocks/EditProfileModal.css";
import { useState } from "react";
import ModalWithForm from "./ModalWithForm";

const EditProfileModal = ({ handleCloseModal, isOpen, updateProfileData }) => {
  const [values, setValues] = useState({ name: "", avatar: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfileData(values);
    handleCloseModal();
  };

  return (
    <ModalWithForm
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      buttonText="Save changes"
      title="Change profile data"
      name="edit"
    >
      <label className="modal__input-label">
        Name *
        <input
          type="text"
          placeholder="Name"
          className="modal__input"
          name="name"
          value={values.name}
          onChange={handleChange}
          required
        ></input>
      </label>
      <label className="modal__input-label">
        Avatar *
        <input
          type="url"
          placeholder="Avatar URL"
          className="modal__input"
          name="avatar"
          value={values.avatar}
          onChange={handleChange}
          required
        ></input>
      </label>
    </ModalWithForm>
  );
};
export default EditProfileModal;
