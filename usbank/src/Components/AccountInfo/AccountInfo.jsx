import React, { useContext, useEffect } from "react";
import "../Styles.css";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../Context/Context";
import { useState } from "react";
import axios from "axios";

const AccountInfo = () => {
  const [data, setData] = useState();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  useEffect(() => {
    axios
      .get("http://localhost:5000/loaninfo")
      .then((response) => {
        console.log(response, "response");
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  let { id } = useParams();
  console.log(data, "data");
  const filteredData = data && data?.filter((item) => String(item.id) === id);
  console.log(filteredData, "fdata");

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    navigate("/landingpage");
  };

  return (
    <>
      <div className="container-box" data-testid="container-box">
        <h2 className="heading-text">Account Information</h2>
        <div className="form container">
          <form>
            <div>
              <label htmlFor="loanId" className="text-grey mb7">
                LoanId:
              </label>
              <input
                type="number"
                id="loanId"
                className="input-feild"
                name="loanId"
                value={filteredData?.id || ""}
                required
              />
            </div>
            <div>
              <label htmlFor="purposeOfLoan" className="text-grey mb7">
                Purpose of Loan:
              </label>
              <input
                type="text"
                id="purposeOfLoan"
                className="input-feild"
                name="purposeOfLoan"
                value={filteredData?.purpose || ""}
                required
              />
            </div>
            <div>
              <label htmlFor="status" className="text-grey mb7">
                Status:
              </label>
              <input
                type="text"
                id="status"
                className="input-feild"
                name="status"
                value={filteredData?.status || ""}
                required
              />
            </div>
            <div>
              <label htmlFor="accountantsTelephone" className="text-grey mb7">
                Accountant's Telephone Number:
              </label>
              <input
                type="tel"
                id="accountantsTelephone"
                className="input-feild"
                name="accountantsTelephone"
                required
              />
            </div>
            <div className="buttonSets">
              <button className="btn-next btn-common" type="submit">
                Submit
              </button>
              <button
                className="btn-cancel btn-common"
                type="button"
                onClick={() => {
                  navigate("/landingpage");
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default AccountInfo;
