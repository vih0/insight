import {render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, vi } from "vitest";
import { Form } from "./Form";

describe("Form Component", () => {
    it("should render input", () => {
        render(<Form />);
        const input = screen.getByTitle("Descreva sua Ideia");
        expect(input).toBeInTheDocument();
        });
          it("submit is called", async () => {
            const {getByTestId} = render(<Form/>)
            const input = await waitFor(()=>{
              getByTestId('form-field')
            })
            console.log(input)

            

            

        });
})

