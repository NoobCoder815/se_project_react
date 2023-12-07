import { useMemo } from "react";
import { defaultClothingItems } from "../utils/constants.js";
import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";

const Main = ({ weatherTemp, onSelectCard }) => {
  const weatherType = useMemo(() => {
    if (weatherTemp >= 86) {
      return "hot";
    } else if (weatherTemp <= 64) {
      return "cold";
    } else {
      return "warm";
    }
  }, [weatherTemp]);

  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard weatherTemp={weatherTemp} day={false} type="fog" />
      <section className="card_section" id="card-section">
        Today is {Math.round(weatherTemp)}&#xb0;F / You may want to wear:
        <div className="clothing__cards">
          {filteredCards.map((item) => (
            <ItemCard key={item._id} item={item} onSelectCard={onSelectCard} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Main;
