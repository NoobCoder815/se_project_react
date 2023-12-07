import "../blocks/App.css";
import { useEffect, useState } from "react";
import {
  getForecastWeather,
  parseWeatherTemp,
  parseWeatherData,
} from "../utils/weatherApi";
import { weatherOptions } from "../utils/constants.js";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import ItemModal from "./ItemModal";
import ModalWithForm from "./ModalWithForm";

const App = () => {
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [weatherImg, setWeatherImg] = useState("");
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        console.log(data);
        const temperature = parseWeatherTemp(data);
        const weatherCondition = parseWeatherData(data).toLowerCase();
        const dayTime =
          Date.now() / 1000 > data.sys.sunset ||
          Date.now() / 1000 < data.sys.sunrise
            ? false
            : true;
        console.log(dayTime);
        const imgSrc = weatherOptions.filter((img) => {
          return img.day === dayTime && img.type === weatherCondition;
        });
        setTemp(temperature);
        setCity(data.name);
        setWeatherImg(imgSrc[0].url);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="page">
      <Header city={city} onCreateModal={handleCreateModal} />
      <Main
        weatherTemp={temp}
        onSelectCard={handleSelectedCard}
        weatherImg={weatherImg}
      />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm onClose={handleCloseModal} title="New garment">
          <label className="modal__input_label">
            Name
            <input
              type="text"
              placeholder="Name"
              className="modal__input"
            ></input>
          </label>
          <label className="modal__input_label">
            Image
            <input
              type="text"
              placeholder="Image URL"
              className="modal__input"
            ></input>
          </label>

          <p className="modal__label modal__label_weather">
            Select the weather type
          </p>
          <div className="modal__weather_options">
            <label className="modal__input_label">
              <input
                type="radio"
                id="hot"
                value="hot"
                className="modal__input_radio"
                name="weather"
              ></input>
              Hot
            </label>
            <label className="modal__input_label">
              <input
                type="radio"
                id="warm"
                value="cold"
                className="modal__input_radio"
                name="weather"
              ></input>
              Warm
            </label>
            <label className="modal__input_label">
              <input
                type="radio"
                id="cold"
                value="warm"
                className="modal__input_radio"
                name="weather"
              ></input>
              Cold
            </label>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;
