import "../blocks/SideBar.css";
import React from "react";
import { useHistory } from "react-router-dom";
import avatar from "../images/avatar.jpg";
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
      <button className="edit_profile" onClick={onEditModal} type="button">
        Change profile data
      </button>
      <button className="sign-out" onClick={signOut} type="button">
        Log out
      </button>
    </div>
  );
};

export default SideBar;
