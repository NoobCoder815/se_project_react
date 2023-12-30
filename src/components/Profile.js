import "../blocks/Profile.css";
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";

const Profile = ({ items, onSelectCard, onCreateModal }) => {
  return (
    <div className="profile">
      <div className="profile__sidebar">
        <SideBar />
      </div>
      <section className="profile__clothes-section">
        <ClothesSection
          items={items}
          onSelectCard={onSelectCard}
          onCreateModal={onCreateModal}
        />
      </section>
    </div>
  );
};

export default Profile;
