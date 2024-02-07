import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
export default function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    reset,
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    const existingUsers = JSON.parse(
      sessionStorage.getItem("registrationData")
    );
    const authenticatedUser = existingUsers?.find(
      (user) =>
        user?.username === data?.username && user?.password === data?.password
    );
    if (authenticatedUser) {
      const userInfo = {
        userName: data.username,
        validUser: true,
      };
      sessionStorage.setItem("loggedin-user", JSON.stringify(userInfo));
      reset();
      navigate("/landingpage");
    } else {
      alert("Invalid Credentials");
      reset();
    }
  };
  return (
    <div className="login-info--wrapper">
      <h3
        className="login-info--header row col-12 d-flex justify-content-center"
        data-testid="login-header"
      >
        Log into BMS below
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className="bms-form">
        <div className="bms-input--wrapper">
          <label>
            Username:
            <input
              {...register("username", { required: "Username is required" })}
              className="bms-input--field"
            />
          </label>
          {errors.username && (
            <p className="bms-form-error-message">{errors.username.message}</p>
          )}
        </div>
        <div className="bms-input--wrapper">
          <label>
            Password:
            <input
              {...register("password", { required: "Password is required" })}
              className="bms-input--field"
              type="password"
            />
          </label>
          {errors.password && (
            <p className="bms-form-error-message">{errors.password.message}</p>
          )}
        </div>
        <input type="submit" className="input-button" value="Login" />
      </form>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h5
          className="register-link"
          style={{ marginTop: "10px", marginLeft: "0px" }}
        >
          If you haven't registered Please
          <div
            onClick={() => navigate("/register")}
            className="register-button"
          >
            <h5 style={{ marginTop: "10px", marginLeft: "40px" }}>
              <a href="."> Register here </a>
            </h5>
          </div>
        </h5>
      </div>
    </div>
  );
}
