import { describe, test, expect, vi } from "vitest";
import { fireEvent, render, waitFor, screen } from "@testing-library/react";
import LoginRegisterContainer from "../loginRegisterContainer";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { BrowserRouter } from "react-router-dom";
import * as api from "../../../api/authFetch";

describe("loginRegisterContainer", () => {
  test("Renders whithout crashing. login type", () => {
    const wrapper = ({ children }: any) => (
      <Provider store={store}>{children}</Provider>
    );

    const result = render(
      <BrowserRouter>
        <LoginRegisterContainer type={"login"} />
      </BrowserRouter>,
      { wrapper }
    );

    expect(result).toMatchSnapshot();
    expect(result.getAllByPlaceholderText("Email"));
    expect(result.getAllByPlaceholderText("Password"));
  });

  test("Renders whithout crashing. register type", () => {
    const wrapper = ({ children }: any) => (
      <Provider store={store}>{children}</Provider>
    );

    const result = render(
      <BrowserRouter>
        <LoginRegisterContainer type={"register"} />
      </BrowserRouter>,
      { wrapper }
    );

    expect(result.getAllByPlaceholderText("Name"));
    expect(result.getAllByPlaceholderText("Phone"));
    expect(result.getAllByPlaceholderText("Email"));
    expect(result.getAllByPlaceholderText("Password"));

    fireEvent.click(result.getByText("Next Page"));

    expect(result.getAllByPlaceholderText("Street"));
    expect(result.getAllByPlaceholderText("House Number"));
    expect(result.getAllByPlaceholderText("Zip Code"));
    expect(result.getAllByPlaceholderText("City"));
    expect(result.getAllByPlaceholderText("Country"));
  });

  test("onlogin", async () => {
    const wrapper = ({ children }: any) => (
      <Provider store={store}>{children}</Provider>
    );

    const result = render(
      <BrowserRouter>
        <LoginRegisterContainer type={"login"} />
      </BrowserRouter>,
      { wrapper }
    );

    fireEvent.change(result.getByPlaceholderText("Email"), {
      target: { value: "dealit@dealit.com" },
    });

    fireEvent.change(result.getByPlaceholderText("Password"), {
      target: { value: "12345" },
    });

    vi.spyOn(api, "fetchlogin");

    fireEvent.click(result.getByText("Login"));

    await waitFor(() => expect(api.fetchlogin).toHaveBeenCalled());

    expect(api.fetchlogin).toHaveReturned();
  });

  test("onregister", async () => {
    const wrapper = ({ children }: any) => (
      <Provider store={store}>{children}</Provider>
    );

    const result = render(
      <BrowserRouter>
        <LoginRegisterContainer type={"register"} />
      </BrowserRouter>,
      { wrapper }
    );

    fireEvent.change(result.getByPlaceholderText("Name"), {
      target: { value: "Alberto Dias" },
    });

    fireEvent.change(result.getByPlaceholderText("Phone"), {
      target: { value: "931421341" },
    });

    fireEvent.change(result.getByPlaceholderText("Email"), {
      target: { value: "dealit@dealit.com" },
    });

    fireEvent.change(result.getByPlaceholderText("Password"), {
      target: { value: "12345" },
    });

    fireEvent.click(result.getByText("Next Page"));

    fireEvent.change(result.getByPlaceholderText("Street"), {
      target: { value: "Rua dos Bobos" },
    });

    fireEvent.change(result.getByPlaceholderText("House Number"), {
      target: { value: "123" },
    });

    fireEvent.change(result.getByPlaceholderText("Zip Code"), {
      target: { value: "12345" },
    });

    fireEvent.change(result.getByPlaceholderText("City"), {
      target: { value: "Porto" },
    });

    fireEvent.change(result.getByPlaceholderText("Country"), {
      target: { value: "Portugal" },
    });

    vi.spyOn(api, "fetchregister");

    fireEvent.click(result.getByText("Register"));

    await waitFor(() => expect(api.fetchregister).toHaveBeenCalled());

    expect(api.fetchregister).toHaveReturned();
  });
});
