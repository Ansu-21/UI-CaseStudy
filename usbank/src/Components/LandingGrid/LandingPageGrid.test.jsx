import { render, screen } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import LandingPageGrid from "./LandingPageGrid";

describe("LandingPageGrid", () => {
  test("Expect LandingPageGrid to render", () => {
    render(
      <BrowserRouter>
        <LandingPageGrid />
      </BrowserRouter>
    );
    expect(screen.getByTestId("grid")).toBeInTheDocument();
  });
});
