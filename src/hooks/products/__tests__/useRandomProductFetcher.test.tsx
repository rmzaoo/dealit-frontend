import { describe, test, expect, vi } from "vitest";
import {
  render,
  screen,
  fireEvent,
  renderHook,
  act,
  waitFor,
} from "@testing-library/react";

import { useRandomProductFetcher } from "../useRandomProductFetcher";
import * as api from "../../../api/productsFetch";

describe("useRandomProductFetcher", () => {
  test("render hook", async () => {
    const product = { id: "1", name: "product 1" };
    vi.spyOn(api, "fetchRandomProduct").mockReturnValue(
      Promise.resolve(product)
    );

    const { result } = renderHook(() => useRandomProductFetcher(1));

    await act(async () => {
      await waitFor(() => expect(api.fetchRandomProduct).toHaveBeenCalled());
    });

    console.log(result);

    expect(result.current).toEqual(product);
  });
});
