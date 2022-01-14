import "./widgetSmall.css";
import profileImg from "../../images/assets/profile-img.png";
import { Visibility } from "@material-ui/icons";

export default function WidgetSmall() {
  return (
    <div className="widget__small">
      <span className="widget__small-title">New Joined Members</span>
      <ul className="widget__small-list">
        <li className="widget__small-listItem">
          <img src={profileImg} alt="widgetå" className="widget__small-image" />
          <div className="widget__small-user">
            <span className="widget__small-userName">Harz Jr.</span>
            <span className="widget__small-userTitle">Web Developer</span>
          </div>
          <button className="widget__small-btn">
            <Visibility className="widget__small-icon" /> Display
          </button>
        </li>
        <li className="widget__small-listItem">
          <img src={profileImg} alt="widgetå" className="widget__small-image" />
          <div className="widget__small-user">
            <span className="widget__small-userName">Harz Jr.</span>
            <span className="widget__small-userTitle">Web Developer</span>
          </div>
          <button className="widget__small-btn">
            <Visibility className="widget__small-icon" /> Display
          </button>
        </li>
        <li className="widget__small-listItem">
          <img src={profileImg} alt="widgetå" className="widget__small-image" />
          <div className="widget__small-user">
            <span className="widget__small-userName">Harz Jr.</span>
            <span className="widget__small-userTitle">Web Developer</span>
          </div>
          <button className="widget__small-btn">
            <Visibility className="widget__small-icon" /> Display
          </button>
        </li>
        <li className="widget__small-listItem">
          <img src={profileImg} alt="widgetå" className="widget__small-image" />
          <div className="widget__small-user">
            <span className="widget__small-userName">Harz Jr.</span>
            <span className="widget__small-userTitle">Web Developer</span>
          </div>
          <button className="widget__small-btn">
            <Visibility className="widget__small-icon" /> Display
          </button>
        </li>
        <li className="widget__small-listItem">
          <img src={profileImg} alt="widgetå" className="widget__small-image" />
          <div className="widget__small-user">
            <span className="widget__small-userName">Harz Jr.</span>
            <span className="widget__small-userTitle">Web Developer</span>
          </div>
          <button className="widget__small-btn">
            <Visibility className="widget__small-icon" /> Display
          </button>
        </li>
      </ul>
    </div>
  );
}
