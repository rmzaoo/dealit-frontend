import { describe, test, expect, vi } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import Homepage from "../Homepage";

describe("Homepage", () => {
  test("Renders whithout crashing.", () => {
    const wrapper = ({ children }: any) => (
      <Provider store={store}>{children}</Provider>
    );

    const result = render(
      <BrowserRouter>
        <Homepage />
      </BrowserRouter>,
      { wrapper }
    );

    expect(result).toMatchSnapshot();
  });
});
