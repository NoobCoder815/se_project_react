import "../blocks/WeatherCard.css";
import { useState, useEffect } from "react";
import { getForecastWeather, parseWeatherData } from "../utils/weatherApi.js";
import clearDay from "../images/day/day.png";
import cloudyDay from "../images/day/cloudy.png";
import fogDay from "../images/day/fog.png";
import rainDay from "../images/day/rain.png";
import snowDay from "../images/day/snow.png";
import stormDay from "../images/day/storm.png";
import clearNight from "../images/night/night.png";
import cloudyNight from "../images/night/cloudy.png";
import fogNight from "../images/night/fog.png";
import rainNight from "../images/night/rain.png";
import snowNight from "../images/night/snow.png";
import stormNight from "../images/night/storm.png";

const weatherOptions = [
  { url: clearDay, day: true, type: "clear" },
  { url: cloudyDay, day: true, type: "cloudy" },
  { url: fogDay, day: true, type: "fog" },
  { url: rainDay, day: true, type: "rain" },
  { url: snowDay, day: true, type: "snow" },
  { url: stormDay, day: true, type: "storm" },
  { url: clearNight, day: false, type: "clear" },
  { url: cloudyNight, day: false, type: "cloudy" },
  { url: fogNight, day: false, type: "fog" },
  { url: rainNight, day: false, type: "rain" },
  { url: snowNight, day: false, type: "snow" },
  { url: stormNight, day: false, type: "storm" },
];
const WeatherCard = ({ weatherTemp, day, type }) => {
  const [weatherImg, setWeather] = useState("");
  const imgSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });
  const imgSrcUrl = imgSrc[0].url || "";
  console.log(imgSrcUrl);
  useEffect(() => {
    getForecastWeather().then((data) => {
      const weather = parseWeatherData(data);
      const nightTime =
        Date.now() / 1000 > data.sys.sunset ||
        Date.now() / 1000 < data.sys.sunrise
          ? (day = false)
          : (day = true);
    });
    setWeather(imgSrcUrl);
  });

  return (
    <section className="weather">
      <div className="weather__info ">{Math.round(weatherTemp)}&#xb0;F</div>
      <img className="weather__image" alt={type} src={weatherImg} />
    </section>
  );
};

export default WeatherCard;
