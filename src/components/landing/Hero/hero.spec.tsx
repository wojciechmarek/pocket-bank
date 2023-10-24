import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Hero } from "./hero";

describe("Landing Hero", () => {
  it("renders hero", () => {
    render(<Hero />);
    expect(screen.getByText("Pocket Bank -")).toBeInTheDocument();
  });
});
