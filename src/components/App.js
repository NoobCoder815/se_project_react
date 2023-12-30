import "../blocks/App.css";
import { useEffect, useMemo, useState } from "react";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.js";
import { weatherOptions } from "../utils/constants.js";
import { getItems, addNewItem, deleteItem } from "../utils/api.js";
import {
  getForecastWeather,
  parseWeatherTemp,
  parseWeatherData,
} from "../utils/weatherApi";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import ItemModal from "./ItemModal";
import AddItemModal from "./AddItemModal";
import Profile from "./Profile";

const App = () => {
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [weatherImg, setWeatherImg] = useState("");
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setTempUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);

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

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F" ? setTempUnit("C") : setTempUnit("F");
  };

  // useEffect(() => {
  //   getItems()
  //     .then((res) => {
  //       setClothingItems(res);
  //     })
  //     .catch(console.eror);
  // }, []);

  const handleAddItemSubmit = (values) => {
    addNewItem(values)
      .then((values) => {
        setClothingItems([values, ...clothingItems]);
        handleCloseModal();
      })
      .catch(console.error);
    console.log(values);
    console.log(clothingItems);
  };

  const handleDeleteItem = () => {
    deleteItem(selectedCard._id)
      .then(() => {
        setClothingItems(
          clothingItems.filter((item) => item._id !== selectedCard._id)
        );
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getItems()
      .then((res) => {
        setClothingItems(res);
      })
      .catch(console.eror);

    getForecastWeather()
      .then((data) => {
        const dayTime =
          Date.now() / 1000 > data.sys.sunset ||
          Date.now() / 1000 < data.sys.sunrise
            ? false
            : true;
        const temperature = parseWeatherTemp(data);
        const weatherCondition = parseWeatherData(data).toLowerCase();
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
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header city={city} onCreateModal={handleCreateModal} />
        <Switch>
          <Route exact path="/">
            <Main
              weatherTemp={temp}
              onSelectCard={handleSelectedCard}
              weatherImg={weatherImg}
              items={clothingItems}
            />
          </Route>
          <Route path="/profile">
            <Profile
              weatherTemp={temp}
              onSelectCard={handleSelectedCard}
              onCreateModal={handleCreateModal}
              items={clothingItems}
            />
          </Route>
        </Switch>

        <Footer />
        {activeModal === "create" && (
          <AddItemModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "create"}
            onAddItem={handleAddItemSubmit}
          />
        )}

        {activeModal === "preview" && (
          <ItemModal
            selectedCard={selectedCard}
            onClose={handleCloseModal}
            onClick={handleDeleteItem}
          />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
};

export default App;
