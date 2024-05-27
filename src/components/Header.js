import "../blocks/Header.css";
import React from "react";
import { currentDate } from "../utils/constants.js";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import logo from "../images/logo.png";
import ToggleSwitch from "./ToggleSwitch.js";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

const Header = ({
  city,
  onCreateModal,
  onRegisterModal,
  onLoginModal,
  isLoggedIn,
}) => {
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <header className="header">
      <div className="header__logo">
        <NavLink to="/">
          <img src={logo} alt="What To Wear"></img>
        </NavLink>
        <p className="header__date-location">
          {currentDate}, {city}
        </p>
      </div>

      <div className="header__nav">
        <ToggleSwitch />
        {isLoggedIn ? (
          <>
            <button
              type="text"
              className="header__add-clothes-button"
              onClick={onCreateModal}
            >
              + Add clothes
            </button>
            <NavLink to="/profile" className="header__username-link">
              <p className="header__username"> {`${currentUser.data.name}`}</p>
            </NavLink>
            <img
              className="header__avatar"
              src={currentUser.data.avatar}
              alt="Avatar"
            ></img>
          </>
        ) : (
          <>
            <button
              className="header__register"
              type="text"
              onClick={onRegisterModal}
            >
              Sign Up
            </button>{" "}
            <button
              className="header__login"
              type="text"
              onClick={onLoginModal}
            >
              Log In
            </button>{" "}
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
