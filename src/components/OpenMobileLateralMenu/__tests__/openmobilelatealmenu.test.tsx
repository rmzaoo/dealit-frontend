import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import OpenMobileLateralMenu from "../OpenMobileLateralMenu";
import { BrowserRouter } from "react-router-dom";

describe("openmobilelatealmenu", () => {
  test("renders", () => {
    const result = render(
      <BrowserRouter>
        <OpenMobileLateralMenu />
      </BrowserRouter>
    );

    expect(result).toBeDefined();
  });
});
