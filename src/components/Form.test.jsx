import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { describe, it, vi } from "vitest";
import { Form } from "./Form";

describe("Form Component", () => {
  it("should render Form", () => {
    render(<Form />);
    const input = screen.getByTitle("Descreva sua Ideia");
    const button = screen.getByRole("button");
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
  it("should call submit function when button is clicked", async () => {
    const event = userEvent.setup();
    const onSubmit = vi.fn();

    render(<Form onSubmit={onSubmit} />);
    const input = screen.getByTestId("form-field");
    const btn = screen.getByTestId("form-btn");
    input.focus();
    await event.type(input, "ideia 1");
    await event.click(btn);
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(input).toHaveValue("ideia 1");
  });
});
