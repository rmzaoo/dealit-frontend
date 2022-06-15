import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Searchbar from "../Searchbar";

describe("searchbar", () => {
  test("renders", () => {
    const result = render(<Searchbar />);

    expect(result).toMatchSnapshot();
  });
});
