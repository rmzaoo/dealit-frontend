import React from "react";
import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ProductDetailsInfo from "../ProductDetailsInfo";

describe("ProductDetailsInfo", () => {
  test("Renders without crashing", () => {
    const mockProduct = {
      id: 1,
      name: "product1",
      userId: 1,
      description: "One, two, cacete...",
      categoryName: "Arroz",
      photos: ["http://cenas", "http://outrascenas"],
      price: 69.0,
    };

    const result = render(
      <BrowserRouter>
        <ProductDetailsInfo product={mockProduct} />
      </BrowserRouter>
    );

    expect(result).toMatchSnapshot();
  });
});
