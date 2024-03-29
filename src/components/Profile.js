import "../blocks/Profile.css";
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";

const Profile = ({
  items,
  onSelectCard,
  onCreateModal,
  onEditModal,
  handleSignOut,
  handleCardLike,
}) => {
  return (
    <div className="profile">
      <div className="profile__sidebar">
        <SideBar onEditModal={onEditModal} handleSignOut={handleSignOut} />
      </div>
      <section className="profile__clothes-section">
        <ClothesSection
          items={items}
          onSelectCard={onSelectCard}
          onCreateModal={onCreateModal}
          handleCardLike={handleCardLike}
        />
      </section>
    </div>
  );
};

export default Profile;
