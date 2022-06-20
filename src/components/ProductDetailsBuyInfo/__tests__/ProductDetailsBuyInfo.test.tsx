import React from "react";
import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ProductDetailsBuyInfo from "../ProductDetailsBuyInfo";

describe("ProductDetails", () => {
  test("renders without crashing", () => {
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
        <ProductDetailsBuyInfo product={mockProduct} />
      </BrowserRouter>
    );
    expect(result).toMatchSnapshot();
  });
});
