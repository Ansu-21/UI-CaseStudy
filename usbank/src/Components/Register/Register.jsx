import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Register() {
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
    const currentUser = existingUsers?.find(
      (user) => user?.username === data?.username
    );
    let updatedUsers = [];
    if (currentUser) {
      updatedUsers = existingUsers?.map((exUser) => {
        if ((exUser) => exUser?.username === data?.username) {
          return {
            ...exUser,
            ...data,
          };
        }
        return exUser;
      });
    } else {
      updatedUsers = (existingUsers || []).concat(data);
    }
    sessionStorage.setItem("registrationData", JSON.stringify(updatedUsers));
    reset();
    alert("Registration succesful, redirecting to home page to login");
    navigate("/");
  };
  // useEffect(() => {
  //   const today = new Date().toISOString().split("T")[0];
  //   document
  //     .getElementsByClassName("bms-input--field-date")[0]
  //     .setAttribute("max", today);
  // }, []);

  return (
    <div className="registration-info--wrapper">
      <h1
        className="registration-info--header"
        data-testid="registration-header"
      >
        Register with us by entering below details
      </h1>
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
        <div className="bms-input--wrapper">
          <label>
            Email:
            <input
              {...register("mail", {
                required: "Email Address is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid Email",
                },
              })}
              className="bms-input--field"
            />
          </label>
          {errors.mail && (
            <p className="bms-form-error-message">{errors.mail.message}</p>
          )}
        </div>
        <div className="bms-input--wrapper">
          <label>
            Phone number:
            <input
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Phone number should only have 10 digits",
                },
              })}
              className="bms-input--field"
              type="tel"
            />
          </label>
          {errors.phone && (
            <p className="bms-form-error-message">{errors.phone.message}</p>
          )}
        </div>
        <input type="submit" className="cta-submit" value="Register" />
      </form>
    </div>
  );
}