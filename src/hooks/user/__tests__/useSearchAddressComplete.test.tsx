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
import useSearchAddressComplete from "../useSearchAddressComplete";
import { Provider } from "react-redux";
import store from "../../../redux/store";

describe("useSearchAddressComplete", () => {
  test("render hook", async () => {
    const callbackMock = {
      features: [
        {
          city: "Porto",
          country: "Portugal",
          address_line1: "Rua das flores",
        },
        {
          city: "Porto",
          country: "Portugal",
          address_line1: "Travessa Antonio flores",
        },
        {
          city: "Porto",
          country: "Portugal",
          address_line1: "Rua Abilio Flores Dias",
        },
      ],
    };

    vi.spyOn(api, "fetchAddress").mockReturnValue(
      Promise.resolve(callbackMock)
    );

    const wrapper = ({ children }: any) => (
      <Provider store={store}>{children}</Provider>
    );

    const { result } = renderHook(() => useSearchAddressComplete("flores"), {
      wrapper,
    });

    await waitFor(() => expect(api.fetchAddress).toHaveBeenCalled());
    expect(result.current.addressComplete).toEqual(callbackMock.features);
  });
});
