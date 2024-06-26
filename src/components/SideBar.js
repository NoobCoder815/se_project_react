import "../blocks/SideBar.css";
import React from "react";
import { useHistory } from "react-router-dom";
import CurrentUserContext from "../contexts/CurrentUserContext";

const SideBar = ({ onEditModal, handleSignOut }) => {
  const currentUser = React.useContext(CurrentUserContext);
  const history = useHistory();
  function signOut() {
    localStorage.removeItem("jwt");
    handleSignOut();
    history.push("/");
  }
  return (
    <div>
      <div className="sidebar__info">
        <img
          className="sidebar__avatar"
          src={currentUser.data.avatar}
          alt="Avatar"
        />
        {`${currentUser.data.name}`}
      </div>
      <div className="sidebar__buttons">
        <button className="edit_profile" onClick={onEditModal} type="button">
          Change profile data
        </button>
        <button className="sign-out" onClick={signOut} type="button">
          Log out
        </button>
      </div>
    </div>
  );
};

export default SideBar;
