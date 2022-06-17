import React from "react";
import { describe, test, expect, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SecundaryButton from "../SecundaryButton";

describe("SecundaryButton", () => {
  test("Renders without crashing.", () => {
    const mockCallBack = vi.fn();

    const result = render(
      <SecundaryButton onClick={mockCallBack}>test button</SecundaryButton>
    );
    fireEvent.click(result.getByText("test button"));

    expect(mockCallBack).toHaveBeenCalled();
    expect(result).toMatchSnapshot();
  });
});
