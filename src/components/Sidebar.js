import "../blocks/SideBar.css";
import avatar from "../images/avatar.jpg";

const SideBar = () => {
  return (
    <>
      <div className="sidebar__info">
        <img className="sidebar__avatar" src={avatar} alt="Avatar" />
        Terrence Tegegne
      </div>
    </>
  );
};

export default SideBar;
