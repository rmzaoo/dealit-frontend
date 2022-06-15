import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import PrimaryButton from "../PrimaryButton";

describe("primarybutton", () => {
  test("renders", () => {
    const mockCallBack = vi.fn();

    const result = render(
      <PrimaryButton onClick={mockCallBack}>test button</PrimaryButton>
    );
    fireEvent.click(result.getByText("test button"));

    expect(mockCallBack).toHaveBeenCalled();
    expect(result).toMatchSnapshot();
  });
});
