import "../blocks/WeatherCard.css";
import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";

const WeatherCard = ({ weatherTemp, weatherImg }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  return (
    <section className="weather">
      <div className="weather__info ">
        {weatherTemp}&#xb0;{currentTemperatureUnit}
      </div>
      <img
        className="weather__image"
        alt="Weather Condition"
        src={weatherImg}
      />
    </section>
  );
};

export default WeatherCard;
