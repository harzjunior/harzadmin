import "./newUser.css";

export default function NewUser() {
  return (
    <div className="new__user">
      <h1 className="new__user-title">NewUser</h1>
      {/* form */}
      <form className="new__user-form">
        <div className="new__user-item">
          {/* Username */}
          <label>Username</label>
          <input type="text" placeholder="harzjunior08" />
        </div>
        {/* full name */}
        <div className="new__user-item">
          <label>Full Name</label>
          <input type="text" placeholder="Harz Junior" />
        </div>
        {/* email */}
        <div className="new__user-item">
          <label>Email</label>
          <input type="email" placeholder="harzjunior08@email.com" />
        </div>
        {/* passwor */}
        <div className="new__user-item">
          <label>Password</label>
          <input type="password" placeholder="********" />
        </div>
        {/* phone */}
        <div className="new__user-item">
          <label>Phone</label>
          <input type="text" placeholder="+1 234 567 89" />
        </div>
        {/* address */}
        <div className="new__user-item">
          <label>Address</label>
          <input type="text" placeholder="New York | USA" />
        </div>
        {/* gender */}
        <div className="new__user-item">
          <label>Gender</label>
          {/* gender */}
          <div className="new__user-gender">
            {/* male */}
            <input type="radio" name="gender" id="maleme" value="male" />
            {/* we can use for instead of htmlFor in React */}
            <label htmlFor="maleme">Male</label>
            {/* female */}
            <input type="radio" name="gender" id="femaleme" value="female" />
            <label htmlFor="femaleme">Female</label>
            {/* other */}
            <input type="radio" name="gender" id="otherme" value="other" />
            <label htmlFor="otherme">Other</label>
          </div>
        </div>

        {/* active button */}
        <div className="new__user-item">
          <label>Active</label>
          <select name="active" id="activeme" className="new__user-select">
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <button className="new__user-btn">Create</button>
      </form>
    </div>
  );
}
