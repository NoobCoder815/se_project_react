import "../blocks/ClothesSection.css";
import ItemCard from "./ItemCard";

const ClothesSection = ({ items, onSelectCard, onCreateModal }) => {
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
          <ItemCard key={item._id} item={item} onSelectCard={onSelectCard} />
        ))}
      </ul>
    </>
  );
};

export default ClothesSection;
