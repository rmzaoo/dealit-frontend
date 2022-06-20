import React from "react";
import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Breadcrumb from "../Breadcrumb";
import { BrowserRouter } from "react-router-dom";

describe("Breadcrumb", () => {
  test("Renders whithout crashing.", () => {
    const result = render(
      <BrowserRouter>
        <Breadcrumb subCategory={"subCategory1"} />
      </BrowserRouter>
    );
    expect(result).toMatchSnapshot();
  });
});
