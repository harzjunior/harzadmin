import profileImg from "../../images/assets/profile-img.png";
import "./widgetLarge.css";

//a button component
const Button = ({ type }) => {
  return <button className={" widget__small-btn " + type}>{type}</button>;
};

export default function WidgetLarge() {
  return (
    <div className="widget__large">
      <h3 className="widget__large-title">Latest transactions</h3>
      <table className="widget__large-table">
        {/* titles */}
        <tr className="widget__large-tr">
          <th className="widget__large-th">Customer</th>
          <th className="widget__large-th">Date</th>
          <th className="widget__large-th">Amount</th>
          <th className="widget__large-th">Status</th>
        </tr>
        {/* itmes  */}
        <tr className="widget__large-tr">
          <td className="widget__large-user">
            <img src={profileImg} alt="user" className="widget__large-image" />
            <span className="widget__large-userName">Smith Scotch.</span>
          </td>
          <td className="widget__large-date">12 December 2022</td>
          <td className="widget__large-amount">$100</td>
          <td className="widget__large-status">
            {/* call button component */}
            <Button type="Approved" />
          </td>
        </tr>{" "}
        <tr className="widget__large-tr">
          <td className="widget__large-user">
            <img src={profileImg} alt="user" className="widget__large-image" />
            <span className="widget__large-userName">Smith Scotch.</span>
          </td>
          <td className="widget__large-date">12 December 2022</td>
          <td className="widget__large-amount">$100</td>
          <td className="widget__large-status">
            {/* call button component */}
            <Button type="Declined" />
          </td>
        </tr>{" "}
        <tr className="widget__large-tr">
          <td className="widget__large-user">
            <img src={profileImg} alt="user" className="widget__large-image" />
            <span className="widget__large-userName">Smith Scotch.</span>
          </td>
          <td className="widget__large-date">12 December 2022</td>
          <td className="widget__large-amount">$100</td>
          <td className="widget__large-status">
            {/* call button component */}
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widget__large-tr">
          <td className="widget__large-user">
            <img src={profileImg} alt="user" className="widget__large-image" />
            <span className="widget__large-userName">Smith Scotch.</span>
          </td>
          <td className="widget__large-date">12 December 2022</td>
          <td className="widget__large-amount">$100</td>
          <td className="widget__large-status">
            {/* call button component */}
            <Button type="Approved" />
          </td>
        </tr>{" "}
      </table>
    </div>
  );
}
