import "../blocks/Header.css";
import { currentDate } from "../utils/constants.js";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import avatar from "../images/avatar.jpg";
import logo from "../images/logo.png";
import ToggleSwitch from "./ToggleSwitch.js";

const Header = ({ city, onCreateModal }) => {
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
        <button
          type="text"
          className="add-clothes-button"
          onClick={onCreateModal}
        >
          + Add clothes
        </button>
        <NavLink to="/profile" className="header__username-link">
          <p className="header__username">Terrence Tegegne</p>
        </NavLink>
        <img className="header__avatar" src={avatar} alt="Avatar"></img>
      </div>
    </header>
  );
};

export default Header;
