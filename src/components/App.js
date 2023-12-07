import "../blocks/App.css";
import { useEffect, useState } from "react";
import { getForecastWeather, parseWeatherTemp } from "../utils/weatherApi";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import ItemModal from "./ItemModal";
import ModalWithForm from "./ModalWithForm";

const App = () => {
  const [temp, setTemp] = useState(0);
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
    getForecastWeather().then((data) => {
      const temperature = parseWeatherTemp(data);
      setTemp(temperature);
    });
  }, []);

  return (
    <div className="page">
      <Header onCreateModal={handleCreateModal} />
      <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
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
            <div>
              <input
                type="radio"
                id="hot"
                value="hot"
                className="modal__input_radio"
              ></input>
              <label className="modal__input_label">Hot</label>
            </div>
            <div>
              <input
                type="radio"
                id="warm"
                value="cold"
                className="modal__input_radio"
              ></input>
              <label className="modal__input_label">Warm</label>
            </div>
            <div>
              <input
                type="radio"
                id="cold"
                value="warm"
                className="modal__input_radio"
              ></input>
              <label className="modal__input_label">Cold</label>
            </div>
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
