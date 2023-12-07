import "../blocks/Header.css";
import { currentDate } from "../utils/constants.js";
import avatar from "../images/avatar.jpg";
import headerLogo from "../images/logo.png";

const Header = ({ city, onCreateModal }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={headerLogo} alt="What To Wear"></img>
        <p className="header__date-location">
          {currentDate}, {city}
        </p>
      </div>

      <div className="header__nav">
        <button
          type="text"
          className="add-clothes-button"
          onClick={onCreateModal}
        >
          + Add clothes
        </button>
        <p className="header__username">Terrence Tegegne</p>
        <img className="header__avatar" src={avatar} alt="Avatar"></img>
      </div>
    </header>
  );
};

export default Header;
