import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Faq from "../Faq";

describe("Faq", () => {
  test("renders", () => {
    const result = render(
      <Faq
        title="faq title"
        description="faq description"
        mapQuestions={[{ question: "question1", answer: "answer1" }]}
      />
    );

    fireEvent.click(screen.getByText("question1"));

    expect(screen.getByText("faq title"));
    expect(screen.getByText("faq description"));
    expect(screen.getByText("answer1"));
    expect(result).toMatchSnapshot();
  });
});
