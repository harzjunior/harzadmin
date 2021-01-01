import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import profileImg from "../../images/assets/profile-img.png";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar__wrapper">
        {/* LeftSide */}
        <div className="top__left">
          <span className="logo">harzadmin</span>
        </div>

        {/* RightSide */}
        <div className="top__right">
          <div className="topbar__icon_container ">
            <NotificationsNone />
            <span className="topicon__bagde">2</span>
          </div>
          <div className="topbar__icon_container ">
            <Language />
            <span className="topicon__bagde">2</span>
          </div>
          <div className="topbar__icon_container ">
            <Settings />
          </div>
          {/* profile picture */}
          <img src={profileImg} alt="profile" className="top__avatar" />
        </div>
      </div>
    </div>
  );
}
