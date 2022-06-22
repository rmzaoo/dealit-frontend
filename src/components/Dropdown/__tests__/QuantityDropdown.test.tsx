import React from "react";
import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import QuantityDropdown from "../Dropdown";

describe("QuantityDropdown", () => {
  test("Renders without crashin", () => {
    const result = render(
      <BrowserRouter>
        <QuantityDropdown />
      </BrowserRouter>
    );

    expect(result).toMatchSnapshot();
  });
});
