import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import CategoryBar from "../CategoryBar";
import { BrowserRouter } from "react-router-dom";
import * as api from "../../../api/productsFetch";

describe("CategoryBar", () => {
  test("renders", () => {
    const result = render(
      <BrowserRouter>
        <CategoryBar />
      </BrowserRouter>
    );
    expect(result).toMatchSnapshot();
  });

  test("renders categories", () => {
    const categories = [
      "category1",
      "category2",
      "category3",
      "category4",
      "category5",
      "category6",
    ];
    vi.spyOn(api, "fetchCategories").mockReturnValue(categories);

    render(
      <BrowserRouter>
        <CategoryBar />
      </BrowserRouter>
    );

    categories.forEach((category) => {
      expect(screen.getByText(category));
    });
  });
});
