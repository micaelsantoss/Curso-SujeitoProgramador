import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { User } from ".";

describe("User component", () => {
    it("should check if the name is not displayed when the component is rendered", () => {
        render(<User/>)

        const message = screen.queryByText("Usuário online: Joao");

        expect(message).not.toBeInTheDocument();
    })

    it("should test if the value typed in the ionput is correct", () => {
        render(<User/>)

        const input = screen.getByPlaceholderText("digite seu nome");
        fireEvent.change(input, { target: { value: "Micael"}})

        expect(input).toHaveValue("Micael");
    })

    it("should display the name when click on button", () => {
        render(<User/>)

        const input = screen.getByPlaceholderText("digite seu nome");
        const button = screen.getByRole("button", { name: "Cadastrar"} );

        fireEvent.change(input, { target: {value: "Joao"}})
        fireEvent.click(button);

        const message = screen.getByText("Usuário online: Joao");

        expect(message).toBeInTheDocument();
    })
})