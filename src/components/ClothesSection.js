import "../blocks/ClothesSection.css";
import { useContext, useMemo } from "react";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.js";
import ItemCard from "./ItemCard";

const ClothesSection = ({
  weatherTemp,
  onSelectCard,
  onCreateModal,
  items,
}) => {
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
    <>
      <div className="clothing-section">
        <p className="clothing-section__header"> Your items</p>
        <button
          className="clothing-section__add-clothes-button"
          type="button"
          onClick={onCreateModal}
        >
          + Add new
        </button>
      </div>
      <ul className="clothing-section__card-list">
        {filteredCards.map((item) => (
          <ItemCard key={item._id} item={item} onSelectCard={onSelectCard} />
        ))}
      </ul>
    </>
  );
};

export default ClothesSection;
