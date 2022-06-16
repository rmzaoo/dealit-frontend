import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MainProductCard, MainProductCardOneColumn, PageData } from "../styles";
import { BrowserRouter } from "react-router-dom";

describe("productListing", () => {
  test("renders", () => {
    const result = render(
      <BrowserRouter>
        <PageData>
          <MainProductCard
            name="element name"
            photos={["https://via.placeholder.com/300"]}
            price={1}
            id={1}
          ></MainProductCard>
        </PageData>
      </BrowserRouter>
    );
  });
  test("renders OneColumn", () => {
    const result = render(
      <BrowserRouter>
        <PageData>
          <MainProductCardOneColumn
            name="element name"
            photos={["https://via.placeholder.com/300"]}
            price={1}
            id={1}
          ></MainProductCardOneColumn>
        </PageData>
      </BrowserRouter>
    );
  });
});
