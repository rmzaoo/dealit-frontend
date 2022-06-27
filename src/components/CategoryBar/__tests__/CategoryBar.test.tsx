import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import CategoryBar from "../CategoryBar";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../redux/store";

describe("CategoryBar", () => {
  test("renders categories", () => {
    const categories = [
      "Clothing",
      "Automotive",
      "Kitchen",
      "Outdoor",
      "Gaming",
      "Electronics",
    ];


    const wrapper = ({ children }: any) => (
      <Provider store={store}>{children}</Provider>
    );

    const result = render(
      <BrowserRouter>
        <CategoryBar />
      </BrowserRouter>,
      { wrapper }
    );


    categories.forEach((category) => {
      expect(result.getByText(category));
    });

    
  });
});
