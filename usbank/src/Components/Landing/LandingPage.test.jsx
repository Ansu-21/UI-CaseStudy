import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import LandingPage from "./LandingPage";

describe("LandingPage", () => {
  test("Expect LandingPage to render", () => {
    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );
    expect(screen.getByTestId("container-dashboard")).toBeInTheDocument();
  });
});
