import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "./HomePage";

describe("Home component", () => {
  it("should render the welcome message and register/login links", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(
      getByText("Welcome to Banking Management System")
    ).toBeInTheDocument();
    expect(getByText("Register")).toBeInTheDocument();
    expect(getByText("Login")).toBeInTheDocument();
  });
});
