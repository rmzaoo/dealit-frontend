import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../Navbar";
import { BrowserRouter } from "react-router-dom";

describe("navbar", () => {
  test("renders", () => {
    const result = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    expect(result).toMatchSnapshot();
  });
});
