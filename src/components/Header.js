import { useEffect, useState } from "react";
import { getForecastWeather } from "../utils/weatherApi";
import avatar from "../images/avatar.jpg";
import headerLogo from "../images/logo.png";

const Header = ({ onCreateModal }) => {
  const [cityName, setCityName] = useState("");
  const currentDate = new Date().toLocaleDateString("default", {
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        setCityName(data.name);
      })
      .catch((err) => console.log(err));
  });

  return (
    <header className="header">
      <div className="header__logo">
        <img src={headerLogo} alt="What To Wear"></img>
        <p className="header__date-location">
          {currentDate}, {cityName}
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
