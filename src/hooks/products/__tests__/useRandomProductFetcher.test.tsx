import { describe, test, expect, vi } from "vitest";
import {
  render,
  screen,
  fireEvent,
  renderHook,
  act,
} from "@testing-library/react";

import { useRandomProductFetcher } from "../useRandomProductFetcher";
import * as api from "../../../api/productsFetch";

describe("useRandomProductFetcher", () => {
  test("render hook", () => {
    vi.spyOn(api, "fetchRandomProduct").mockReturnValue(
        
      Promise.resolve({ id: 1, name: "product1" })
    );



    const { result } = renderHook(() => useRandomProductFetcher(1));

    
    expect(result.current)
  });
});
