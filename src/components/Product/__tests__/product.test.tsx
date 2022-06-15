import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Product from "../Product";

describe("product", () => {
  test("should first", () => {
    const result = render(
      <BrowserRouter>
        <Product
          id={1}
          name="test"
          photos={["https://via.placeholder.com/300"]}
          price={1}
        />
      </BrowserRouter>
    );

    // const img = screen.getByAltText("product");
    // expect(img.getAttribute("src")).toBe("https://via.placeholder.com/300");

    // expect(screen.getByText("test"));
    // expect(screen.getByText("1"));

    // expect(result).toMatchSnapshot();
  });
});
