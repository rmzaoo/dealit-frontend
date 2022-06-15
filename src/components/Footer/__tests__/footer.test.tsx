import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Footer from "../Footer";

describe("footer", () => {
  test("renders", () => {
    const year = new Date().getFullYear();
    const result = render(<Footer />);
    expect(screen.getByText(`© Dealit ${year}`));
    expect(result).toMatchSnapshot();
  });
});
