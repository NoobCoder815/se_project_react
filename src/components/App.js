import "../blocks/App.css";
import { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.js";
import CurrentUserContext from "../contexts/CurrentUserContext.js";
import { weatherOptions } from "../utils/constants.js";
import * as api from "../utils/api.js";
import * as weatherApi from "../utils/weatherApi";
import * as auth from "../utils/auth.js";
import Header from "./Header";
import Main from "./Main";
import RegistrationModal from "./RegistrationModal.js";
import LoginModal from "./LoginModal.js";
import EditProfileModal from "./EditProfileModal.js";
import ProtectedRoute from "./ProtectedRoute.js";
import Profile from "./Profile";
import AddItemModal from "./AddItemModal";
import ItemModal from "./ItemModal";
import Footer from "./Footer";
import DeleteModal from "./DeleteModal.js";

const App = () => {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({ data: {} });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [weatherImg, setWeatherImg] = useState("");
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState([]);
  const [currentTemperatureUnit, setTempUnit] = useState("F");

  const handleRegistrationModal = () => {
    setActiveModal("register");
  };
  const handleLoginModal = () => {
    setActiveModal("login");
  };
  const handleCreateModal = () => {
    setActiveModal("create");
  };
  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };
  const handleEditModal = () => {
    setActiveModal("edit");
  };
  const handleDeleteModal = () => {
    setActiveModal("delete");
  };
  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F" ? setTempUnit("C") : setTempUnit("F");
  };

  const handleRegistration = (values) => {
    auth
      .signUp(values)
      .then(() => handleLogin(values))
      .catch((err) => console.log(err));
  };

  const handleLogin = (values) => {
    auth
      .signIn(values.email, values.password)
      .then((data) => {
        if (data.token) {
          handleTokenCheck();
          handleCloseModal();
        }
      })
      .catch((err) => console.log(err));
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    setCurrentUser({ data: {} });
  };

  const handleTokenCheck = () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      auth
        .checkToken(jwt)
        .then((data) => {
          if (data) {
            setIsLoggedIn(true);
            setCurrentUser({ data });
            history.push("/profile");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const handleAddItem = (values) => {
    const token = localStorage.getItem("jwt");
    api
      .addNewItem(values, token)
      .then((values) => {
        setClothingItems([values, ...clothingItems]);
        handleCloseModal();
      })
      .catch(console.error);
  };

  const handleDeleteItem = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("jwt");
    api
      .deleteItem(selectedCard._id, token)
      .then(() => {
        setClothingItems(
          clothingItems.filter((item) => item._id !== selectedCard._id)
        );
        handleCloseModal();
      })
      .catch(console.error);
  };

  const handleCardLike = ({ id, isLiked }) => {
    const token = localStorage.getItem("jwt");
    !isLiked
      ? api
          .addCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((c) => (c._id === id ? updatedCard : c))
            );
          })
          .catch((err) => console.log(err))
      : api
          .removeCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((c) => (c._id === id ? updatedCard : c))
            );
          })
          .catch((err) => console.log(err));
  };

  const updateProfileData = (userData) => {
    const token = localStorage.getItem("jwt");
    auth
      .editProfileData(userData, token)
      .then((userData) => {
        setCurrentUser({ data: userData });
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    handleTokenCheck();
    api
      .getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch(console.error);

    weatherApi
      .getForecastWeather()
      .then((data) => {
        const dayTime =
          Date.now() / 1000 > data.sys.sunset ||
          Date.now() / 1000 < data.sys.sunrise
            ? false
            : true;
        const temperature = weatherApi.parseWeatherTemp(data);
        const weatherCondition = weatherApi
          .parseWeatherData(data)
          .toLowerCase();
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
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header
            city={city}
            onCreateModal={handleCreateModal}
            onRegisterModal={handleRegistrationModal}
            onLoginModal={handleLoginModal}
            isLoggedIn={isLoggedIn}
          />
          <Switch>
            <ProtectedRoute isLoggedIn={isLoggedIn} path="/profile">
              <Profile
                onSelectCard={handleSelectedCard}
                onCreateModal={handleCreateModal}
                onEditModal={handleEditModal}
                items={clothingItems}
                handleSignOut={handleSignOut}
                handleCardLike={handleCardLike}
              />
            </ProtectedRoute>
            <Route path="/">
              <Main
                weatherTemp={temp}
                onSelectCard={handleSelectedCard}
                weatherImg={weatherImg}
                items={clothingItems}
                handleCardLike={handleCardLike}
              />
            </Route>
          </Switch>

          <Footer />
          {activeModal === "register" && (
            <RegistrationModal
              handleCloseModal={handleCloseModal}
              onLoginModal={handleLoginModal}
              handleRegistration={handleRegistration}
              isOpen={activeModal === "register"}
            />
          )}
          {activeModal === "login" && (
            <LoginModal
              handleCloseModal={handleCloseModal}
              onRegisterModal={handleRegistrationModal}
              isOpen={activeModal === "login"}
              handleLogin={handleLogin}
            />
          )}
          {activeModal === "edit" && (
            <EditProfileModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "edit"}
              updateProfileData={updateProfileData}
            />
          )}
          {activeModal === "create" && (
            <AddItemModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "create"}
              handleAddItem={handleAddItem}
            />
          )}
          {activeModal === "preview" && (
            <ItemModal
              selectedCard={selectedCard}
              onClose={handleCloseModal}
              onClick={handleDeleteModal}
            />
          )}
          {activeModal === "delete" && (
            <DeleteModal
              onClose={handleCloseModal}
              handleDeleteItem={handleDeleteItem}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
