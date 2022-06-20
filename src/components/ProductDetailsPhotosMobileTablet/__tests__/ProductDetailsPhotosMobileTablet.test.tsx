import React from "react";
import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ProductDetailsPhotosMobileTablet from "../ProductDetailsPhotosMobileTablet";

describe("ProductDetailsPhotosMobileTablet", () => {
    test("Renders without crashing.", () => {

        const mockProduct = {
            id: 1,
            name: "product1",
            userId: 1,
            description: "One, two, cacete...",
            categoryName: "Arroz",
            photos: ["http://cenas", "http://outrascenas"],
            price: 69.00
          };

        const result = render(
            <BrowserRouter>
                <ProductDetailsPhotosMobileTablet product={mockProduct} />
            </BrowserRouter>
        )

        expect(result).toMatchSnapshot();
    })
})