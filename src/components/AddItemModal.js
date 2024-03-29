import "../blocks/AddItemModal.css";
import { useState } from "react";
import ModalWithForm from "./ModalWithForm";

const AddItemModal = ({ handleCloseModal, onAddItem, isOpen }) => {
  const [name, setName] = useState("");
  const [imageUrl, setUrl] = useState("");
  const [weather, setWeather] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleWeatherChange = (e) => {
    setWeather(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, imageUrl, weather });
    handleCloseModal();
  };

  return (
    <ModalWithForm
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      buttonText="Add garment"
      title="New garment"
    >
      <label className="modal__input-label">
        Name
        <input
          type="text"
          placeholder="Name"
          className="modal__input"
          value={name}
          onChange={handleNameChange}
          required
        ></input>
      </label>
      <label className="modal__input-label">
        Image
        <input
          type="url"
          placeholder="Image URL"
          className="modal__input"
          value={imageUrl}
          onChange={handleUrlChange}
        ></input>
      </label>

      <p className="modal__label modal__label_weather">
        Select the weather type
      </p>
      <div className="modal__weather_options">
        <div className="modal__input_radio">
          <input
            type="radio"
            id="hot"
            value="hot"
            name="weather"
            className="input_radio"
            onChange={handleWeatherChange}
          ></input>
          <label
            htmlFor="hot"
            className="modal__input-label modal__input-label_radio"
          >
            Hot
          </label>
        </div>

        <div className="modal__input_radio">
          <input
            type="radio"
            id="warm"
            value="warm"
            className="input_radio"
            name="weather"
            onChange={handleWeatherChange}
          ></input>
          <label
            htmlFor="warm"
            className="modal__input-label modal__input-label_radio"
          >
            Warm
          </label>
        </div>

        <div className="modal__input_radio">
          <input
            type="radio"
            id="cold"
            value="cold"
            className="input_radio"
            name="weather"
            onChange={handleWeatherChange}
          ></input>
          <label
            htmlFor="cold"
            className="modal__input-label modal__input-label_radio"
          >
            Cold
          </label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
