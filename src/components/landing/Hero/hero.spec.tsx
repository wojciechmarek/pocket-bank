import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Hero } from "./hero";

describe("Landing Hero", () => {
  it("renders hero", () => {
    render(<Hero />);
    expect(screen.getByText("Pocket Bank -")).toBeInTheDocument();
  });
});
