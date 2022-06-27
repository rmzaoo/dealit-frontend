import React, { SetStateAction, useState } from "react";
import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Dropdown from "../Dropdown";

describe("Dropdown", () => {
  test("Renders without crashin", () => {
    const [mockState, setMockState] = useState("1");
    const result = render(
      <BrowserRouter>
        <Dropdown
          optionSelected={mockState}
          setOptionSelected={setMockState}
          options={["1","2","3"]}
        />
      </BrowserRouter>
    );

    expect(result).toMatchSnapshot();
  });
});
