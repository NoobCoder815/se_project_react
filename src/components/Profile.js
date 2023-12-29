import "../blocks/Profile.css";
import Sidebar from "./Sidebar";
import ClothesSection from "./ClothesSection";

const Profile = ({ weatherTemp, onSelectCard, onCreateModal, items }) => {
  return (
    <div className="profile">
      <div className="profile__sidebar">
        <Sidebar />
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
