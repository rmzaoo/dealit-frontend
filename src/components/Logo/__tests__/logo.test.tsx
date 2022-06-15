import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Logo from "../Logo";

describe("logo", () => {
  test("renders", () => {
    const mockCallBack = vi.fn();

    const result = render(<Logo onClick={mockCallBack} />);
    fireEvent.click(result.getByText("Deal"));

    expect(mockCallBack).toHaveBeenCalled();
    expect(result).toMatchSnapshot();
  });
});
