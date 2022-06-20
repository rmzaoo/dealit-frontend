import React from "react";
import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { LoadingPageContainer } from "../styled";
import LoadingPage from "../LoadingPage";

describe("LoadingPage", () => {
  test("Renders without crashing.", () => {
    const result = render(
      <BrowserRouter>
        <LoadingPage />
      </BrowserRouter>
    );
    expect(result).toMatchSnapshot();
  });
});
