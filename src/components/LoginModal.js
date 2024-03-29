import "../blocks/LoginModal.css";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import * as auth from "../utils/auth";
import ModalWithForm from "./ModalWithForm";

const LoginModal = ({
  handleCloseModal,
  isOpen,
  handleLogin,
  onRegisterModal,
}) => {
  const history = useHistory();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.email || !values.password) {
      return;
    }
    auth
      .signIn(values.email, values.password)
      .then((data) => {
        if (data.token) {
          setValues({ email: "", password: "" });
          handleLogin();
          history.push("/profile");
        }
      })
      .catch((err) => console.log(err));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <>
      <ModalWithForm
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        buttonText="Login"
        title="Log in"
        name="login"
      >
        <label className="modal__input-label">
          Email
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
          Password
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
        <button
          className="modal__signup"
          type="button"
          onClick={onRegisterModal}
        >
          or Sign Up
        </button>
      </ModalWithForm>
    </>
  );
};

export default LoginModal;
