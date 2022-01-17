import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  WorkOutline,
  Report,
  ChatBubbleOutline,
  DynamicFeed,
  MailOutline,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
} from "@material-ui/icons";
// import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <div className="sidebar__menu">
          <h3 className="sidebar__title">Dashboard </h3>
          <ul className="sidebar__list">
            <li className="sidebar__list-items active">
              {/* <Link to="/" className="btn-link"> */}
              <LineStyle className="sidebar__icon" /> Home
              {/* </Link> */}
            </li>
            <li className="sidebar__list-items">
              <Timeline className="sidebar__icon" /> Analytics
            </li>
            <li className="sidebar__list-items">
              <TrendingUp className="sidebar__icon" /> Sales
            </li>
          </ul>
        </div>

        <div className="sidebar__menu">
          <h3 className="sidebar__title">Quick Menu </h3>
          <ul className="sidebar__list">
            <li className="sidebar__list-items ">
              {/* <Link to="/users" className="btn-link"> */}
              <PermIdentity className="sidebar__icon" /> Users
              {/* </Link> */}
            </li>

            <li className="sidebar__list-items">
              <Storefront className="sidebar__icon" /> Products
            </li>
            <li className="sidebar__list-items">
              <AttachMoney className="sidebar__icon" /> Transactions
            </li>
            <li className="sidebar__list-items">
              <BarChart className="sidebar__icon" /> Reports
            </li>
          </ul>
        </div>

        <div className="sidebar__menu">
          <h3 className="sidebar__title">Notifications </h3>
          <ul className="sidebar__list">
            <li className="sidebar__list-items ">
              <MailOutline className="sidebar__icon" /> Mail
            </li>
            <li className="sidebar__list-items">
              <DynamicFeed className="sidebar__icon" /> Feedback
            </li>
            <li className="sidebar__list-items">
              <ChatBubbleOutline className="sidebar__icon" /> Messages
            </li>
          </ul>
        </div>

        <div className="sidebar__menu">
          <h3 className="sidebar__title">Staff </h3>
          <ul className="sidebar__list">
            <li className="sidebar__list-items ">
              <WorkOutline className="sidebar__icon" /> Manage
            </li>
            <li className="sidebar__list-items">
              <Timeline className="sidebar__icon" /> Analytics
            </li>
            <li className="sidebar__list-items">
              <Report className="sidebar__icon" /> Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
