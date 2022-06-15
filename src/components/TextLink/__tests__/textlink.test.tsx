import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import TextLink from "../TextLink";

describe("textlink", () => {
  test("renders", () => {
    const mockCallback = vi.fn();
    const result = render(
      <TextLink onClick={mockCallback}>Teste Link</TextLink>
    );

    fireEvent.click(screen.getByText("Teste Link"));

    expect(result).toMatchSnapshot();
    expect(screen.getByText("Teste Link"));
    expect(mockCallback).toHaveBeenCalled();
  });
});
