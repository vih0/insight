import { render, screen } from "@testing-library/react";
import { describe } from "vitest";
import { PostIt } from "./PostIt";
import userEvent from "@testing-library/user-event";

describe("PostIt Component", () => {
  it("should renders correctly", () => {
    const { container } = render(
      <PostIt text="meu postit" date="20/02/2022" background="#744444" />
    );
    expect(screen.getByText(/meu postit/i)).toBeInTheDocument();
    expect(screen.getByText("20/02/2022")).toBeInTheDocument();
    expect(container.firstChild).toHaveStyleRule("background", "#744444");
  });
  it("should the function is called", async () => {
    const event = userEvent.setup();
    const isCalled = vi.fn();
    render(<PostIt Onclick={isCalled} text="meu postit"/>);
    await event.click(screen.getByText(/meu postit/i));
    expect(isCalled).toBeCalledTimes(1);
  });
});
