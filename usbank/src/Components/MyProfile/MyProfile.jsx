import React, { useContext } from "react";
import "../Styles.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "../Context/Context";
const MyProfile = () => {
  const [submitted, setSubmitted] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/account");
  };

  return (
    <div className="container-box" data-testid="container-box">
      <h2 className="heading-text">My Profile</h2>
      <div className="form container">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName" className="text-grey mb7">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              className="input-feild"
              name="firstName"
              value={user?.firstname}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="text-grey mb7">
              Last Name:
            </label>
            <input
              type="text"
              className="input-feild"
              id="lastName"
              name="lastName"
              value={user?.lastname}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="text-grey mb7">
              Email Address:
            </label>
            <input
              type="email"
              className="input-feild"
              id="email"
              name="email"
              value={user?.email}
              required
            />
          </div>
          <div>
            <label htmlFor="region" className="text-grey mb7">
              Region:
            </label>
            <select id="region" className="input-feild" name="region" required>
              <option value="Chennai">Chennai</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Hyderabad">Hyderabad</option>
            </select>
          </div>
          <div className="buttonSets">
            <button className="btn-next btn-common" type="submit">
              Next
            </button>
            <button
              className="btn-cancel btn-common"
              type="button"
              onClick={() => navigate("/landingpage")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default MyProfile;
