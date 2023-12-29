import "../blocks/Main.css";
import { useContext, useMemo } from "react";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.js";
import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";

const Main = ({ weatherTemp, onSelectCard, weatherImg, items }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherTemp?.[currentTemperatureUnit] || "No Weather Data";
  const weatherType = useMemo(() => {
    if (temp >= 86) {
      return "hot";
    } else if (temp <= 64) {
      return "cold";
    } else {
      return "warm";
    }
  }, [weatherTemp]);

  const filteredCards = items.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard weatherTemp={temp} weatherImg={weatherImg} />
      <section className="card__section" id="card-section">
        Today is {temp}&#xb0;{currentTemperatureUnit} / You may want to wear:
        <ul className="clothing__cards">
          {filteredCards.map((item) => (
            <ItemCard key={item._id} item={item} onSelectCard={onSelectCard} />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Main;
