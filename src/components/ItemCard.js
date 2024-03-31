import "../blocks/ItemCard.css";
import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
const ItemCard = ({ id, item, onSelectCard, handleCardLike }) => {
  const currentUser = React.useContext(CurrentUserContext);
  const isLiked = item.likes.some((id) => id === currentUser.data._id);
  console.log(item.likes);
  console.log(currentUser.data._id);
  const likeBtnClassName = `card__like-button ${
    isLiked ? "card__like-button_active" : "card__like-button"
  }`;
  return (
    <li className="card">
      <img
        src={item.imageUrl}
        alt={item.name}
        className="card__image"
        onClick={() => onSelectCard(item)}
      ></img>
      <div className="card__description">
        <p className="card__name">{item.name}</p>
        <button
          className={likeBtnClassName}
          type="button"
          onMouseDown={() => handleCardLike({ id, isLiked })}
        ></button>
      </div>
    </li>
  );
};

export default ItemCard;
