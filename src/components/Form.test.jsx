import {render, screen, waitFor , } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { describe, it, vi } from "vitest";
import { Form } from "./Form";

describe("Form Component", () => {
    it("should render Form", () => {
        render(<Form />);
        const input = screen.getByTitle("Descreva sua Ideia");
        const button = screen.getByRole('button')
        expect(input).toBeInTheDocument();
        expect(button).toBeInTheDocument();
        });
    it("should call submit function when button is clicked", async () => {
            const event = userEvent.setup()
            const sbmt = vi.fn()
            render(<Form onSubmit={sbmt}/>)
            const input =screen.getByTestId('form-field')
            const btn = screen.getByTestId('form-btn')
            input.focus()
            event.type(input, 'teste')
            console.log(btn)
            await waitFor(async () => await event.click(btn))
            
            expect(sbmt).toHaveBeenCalledTimes(1)
       });
})

