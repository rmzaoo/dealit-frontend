import { describe, test, expect, vi } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import LoginRegisterPage from "../LoginRegisterPage";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import * as hooks from "../../../hooks/user/useAuthenticationValidation";

describe("LoginRegisterPage", () => {
  test("Renders whithout crashing. login type", () => {
    const wrapper = ({ children }: any) => (
      <Provider store={store}>{children}</Provider>
    );

    vi.spyOn(hooks, "default").mockReturnValue({
      isLogged: false,
      isLoading: false,
      error: false,
    });

    const result = render(
      <BrowserRouter>
        <LoginRegisterPage type="login" />
      </BrowserRouter>,
      { wrapper }
    );

    expect(result).toMatchSnapshot();
    expect(result.getByText("Welcome Back to"));
    fireEvent.click(result.getByText("Login"));
    expect(hooks.default).toHaveBeenCalled();
  });

  test("Renders whithout crashing.register type", () => {
    const wrapper = ({ children }: any) => (
      <Provider store={store}>{children}</Provider>
    );

    vi.spyOn(hooks, "default").mockReturnValue({
      isLogged: false,
      isLoading: false,
      error: false,
    });

    const result = render(
      <BrowserRouter>
        <LoginRegisterPage type="register" />
      </BrowserRouter>,
      { wrapper }
    );

    expect(result.getByText("Create an account on"));
    fireEvent.click(result.getByText("Next Page"));
    fireEvent.click(result.getByText("Register"));
    expect(hooks.default).toHaveBeenCalled();
  });
});
