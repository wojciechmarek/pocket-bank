import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Footer } from "./footer";

describe("Landing Footer", () => {
  it("renders landing footer", () => {
    render(<Footer />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});
