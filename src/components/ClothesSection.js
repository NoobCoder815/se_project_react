import "../blocks/ClothesSection.css";
import React from "react";
import ItemCard from "./ItemCard";
import CurrentUserContext from "../contexts/CurrentUserContext";

const ClothesSection = ({
  items,
  onSelectCard,
  onCreateModal,
  handleCardLike,
}) => {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <>
      <div className="clothing-section">
        <p className="clothing-section__header">Your items</p>
        <button
          className="clothing-section__add-clothes-button"
          type="button"
          onClick={onCreateModal}
        >
          + Add new
        </button>
      </div>
      <ul className="clothing-section__card-list">
        {items.map((item) => (
          <ItemCard
            key={item._id}
            id={item._id}
            item={item}
            onSelectCard={onSelectCard}
            handleCardLike={handleCardLike}
          />
        ))}
      </ul>
    </>
  );
};

export default ClothesSection;
