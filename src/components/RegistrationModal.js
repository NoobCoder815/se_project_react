import "../blocks/RegistrationModal.css";
import { useState } from "react";
import ModalWithForm from "./ModalWithForm";
const RegistrationModal = ({
  handleCloseModal,
  isOpen,
  onLoginModal,
  handleRegistration,
}) => {
  const [values, setValues] = useState({
    name: "",
    avatar: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration(values);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  return (
    <ModalWithForm
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      buttonText="Next"
      title="Sign up"
    >
      <label className="modal__input-label">
        Email*
        <input
          type="email"
          placeholder="Email"
          className="modal__input"
          name="email"
          value={values.email}
          onChange={handleChange}
          required
        ></input>
      </label>
      <label className="modal__input-label">
        Password*
        <input
          type="password"
          placeholder="Password"
          className="modal__input"
          name="password"
          value={values.password}
          onChange={handleChange}
          required
        ></input>
      </label>
      <label className="modal__input-label">
        Name
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
        Avatar URL
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
      <button className="modal__login" type="button" onClick={onLoginModal}>
        or Log In
      </button>
    </ModalWithForm>
  );
};

export default RegistrationModal;
