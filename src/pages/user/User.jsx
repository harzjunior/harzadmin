import "./user.css";
import profileImg from "../../images/assets/profile-img.png";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function User() {
  return (
    <>
      <div className="user">
        <div className="user__title-container">
          {/* Show Widget Body */}
          <h1 className="user_title">Edit User</h1>
          {/* link to New User page */}
          <Link to="/new-user">
            <button className="user__add-btn">Create</button>
          </Link>
        </div>
        {/* body */}
        <div className="user__container">
          <div className="user__show">
            <div className="user__show-top">
              <img src={profileImg} alt="" className="user__show-image" />
              <div className="user__show-jobTitle">
                <span className="user__show-userName">Harz Junior</span>
                <span className="user__show-userTitle">Web Developer</span>
              </div>
            </div>
            <div className="user__show-bottom">
              <span className="user__show-title">Account Details</span>
              {/* Account Details */}
              <div className="user__show-info">
                <PermIdentity className="user__show-icon" />
                <span className="user__show-infoTitle">harzjunior08</span>
              </div>
              <div className="user__show-info">
                <CalendarToday className="user__show-icon" />
                <span className="user__show-infoTitle">23-03-1999</span>
              </div>

              {/* Contact Details */}
              <span className="user__show-title">Contact Details</span>
              <div className="user__show-info">
                <PhoneAndroid className="user__show-icon" />
                <span className="user__show-infoTitle">+1 234 567 89</span>
              </div>
              <div className="user__show-info">
                <MailOutline className="user__show-icon" />
                <span className="user__show-infoTitle">
                  Harzjunior08@email.com
                </span>
              </div>
              <div className="user__show-info">
                <LocationSearching className="user__show-icon" />
                <span className="user__show-infoTitle">New York | USA</span>
              </div>
            </div>
          </div>
          {/* End of Show Widget Body */}
          {/* Edit Widget Body */}
          <div className="user__update">
            <span className="user__update-title">Edit</span>
            <form className="user__update-form">
              {/* Left Side Information */}
              <div className="user__update-left">
                {/* username */}
                <div className="user__update-item">
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder="harzjunior08"
                    className="user__update-input"
                  />
                </div>
                {/* full names */}
                <div className="user__update-item">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Harz Junior"
                    className="user__update-input"
                  />
                </div>
                {/* email */}
                <div className="user__update-item">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="harzjunior08@email.com"
                    className="user__update-input"
                  />
                </div>
                {/* phone */}
                <div className="user__update-item">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder="+1 234 567 89"
                    className="user__update-input"
                  />
                </div>
                {/* address */}
                <div className="user__update-item">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder="New York | USA"
                    className="user__update-input"
                  />
                </div>
              </div>

              {/* Left Side Profile picture */}
              <div className="user__update-right">
                {/* image avatar */}
                <div className="user__update-upload">
                  <img
                    className="user__update-image"
                    src={profileImg}
                    alt="profile"
                  />

                  {/* upload button image */}
                  <label htmlFor="fileMe">
                    <Publish className="user__update-icon" />
                  </label>
                  <input type="file" id="fileMe" style={{ display: "none" }} />
                </div>
                <button className="user__update-btn">Update</button>
              </div>
            </form>
          </div>
          {/* End of Edit Widget Body */}
        </div>
      </div>
    </>
  );
}
