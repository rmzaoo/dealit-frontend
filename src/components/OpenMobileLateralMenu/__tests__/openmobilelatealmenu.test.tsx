import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import OpenMobileLateralMenu from "../OpenMobileLateralMenu";

describe("openmobilelatealmenu", () => {
  test("renders", () => {
    const result = render(<OpenMobileLateralMenu />);

    expect(result).toBeDefined();
  });
});
