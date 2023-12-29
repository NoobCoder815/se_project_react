import "../blocks/Profile.css";
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";

const Profile = ({ weatherTemp, onSelectCard, onCreateModal, items }) => {
  return (
    <div className="profile">
      <div className="profile__sidebar">
        <SideBar />
      </div>
      <section className="profile__clothes-section">
        <ClothesSection
          weatherTemp={weatherTemp}
          onSelectCard={onSelectCard}
          onCreateModal={onCreateModal}
          items={items}
        />
      </section>
    </div>
  );
};

export default Profile;
