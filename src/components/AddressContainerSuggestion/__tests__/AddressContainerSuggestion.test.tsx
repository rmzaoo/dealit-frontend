import { describe, test, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import AddressContainerSuggestion from "../AddressContainerSuggestion";
import * as hook from "../../../hooks/user/useSearchAddressComplete";

describe("AddressContainerSuggestion", () => {
  test("Renders whithout crashing.", () => {
    const prop = {
      addressSearched: "porto",
      values: {
        name: "Abilio Dias",
        phone: "931231234",
        email: "abiliodias@gmail.com",
        password: "1234567Password.",
        country: "",
        city: "",
        zipCode: "",
        street: "Porto",
        houseNumber: "",
      },
      setValues: vi.fn(),
      setShowSuggestion: vi.fn(),
    };

    vi.spyOn(hook, "default").mockImplementation(
      () =>
        ({
          addressComplete: [
            {
              properties: {
                city: "Porto",
                country: "Portugal",
                address_line1: "Rua das flores",
              },
            },
            {
              properties: {
                city: "Porto",
                country: "Portugal",
                address_line1: "Travessa Antonio flores",
              },
            },
          ],
          isLoading: false,
          error: false,
        } as any)
    );

    const result = render(<AddressContainerSuggestion {...prop} />);

    expect(hook.default).toHaveBeenCalledWith("porto");

    expect(result.getByText("Rua das flores"));
    expect(result.getByText("Travessa Antonio flores"));
    expect(hook.default).toHaveBeenCalledWith("porto");
    expect(result).toMatchSnapshot();
  });
});
