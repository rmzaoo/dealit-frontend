import { describe, test, expect, vi } from "vitest";
import {
  render,
  screen,
  fireEvent,
  renderHook,
  act,
  waitFor,
} from "@testing-library/react";

import * as api from "../../../api/userFetch";
import useAuthenticationValidation from "../useAuthenticationValidation";
import { Provider } from "react-redux";
import store from "../../../redux/store";

describe("useAuthenticationValidation", () => {
  test("render hook", async () => {
    const callbackMock = {
      id: 0,
      username: "DealIt",
      email: "dealit@dealit.com",
      password: null,
      phone: null,
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkRlYWxJdCIsImVtYWlsIjoiZGVhbGl0QGRlYWxpdC5jb20iLCJpYXQiOjE2NTU3MzgwOTcsImV4cCI6MTY1NTc0NTI5N30.ja7DjvkpWwSFv0OpWh8SPNHWhrO7yvM8d7wF1dGPvj8",
      photo: null,
      addresses: [],
      creditCards: [],
      orders: [],
    };
    const jwt =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkRlYWxJdCIsImVtYWlsIjoiZGVhbGl0QGRlYWxpdC5jb20iLCJpYXQiOjE2NTU3MzgwOTcsImV4cCI6MTY1NTc0NTI5N30.ja7DjvkpWwSFv0OpWh8SPNHWhrO7yvM8d7wF1dGPvj8";
    vi.spyOn(api, "fetchUser").mockReturnValue(Promise.resolve(callbackMock));

    const wrapper = ({ children }: any) => (
      <Provider store={store}>{children}</Provider>
    );

    const { result } = renderHook(() => useAuthenticationValidation(jwt), {
      wrapper,
    });

    await waitFor(() => expect(api.fetchUser).toHaveBeenCalled());

    expect(result.current.isLogged);
  });
});
