import "../blocks/ItemCard.css";
const ItemCard = ({ item, onSelectCard }) => {
  return (
    <li className="card" onClick={() => onSelectCard(item)}>
      <img src={item.link} alt={item.name} className="card__image"></img>
      <p className="card__name">{item.name}</p>
    </li>
  );
};

export default ItemCard;
