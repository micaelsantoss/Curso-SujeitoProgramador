import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Posts } from ".";
import { http } from "msw";
import { setupServer } from "msw/node";

describe("Posts Component", () => {
    const server = setupServer(
        http.get("https://jsonplaceholder.typecode.com/users", (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json([
                    {
                        "id": 1,
                        "name": "Leanne Graham",
                        "username": "Bret",
                        "email": "Sincere@april.biz",
                        "address": {
                        "street": "Kulas Light",
                        "suite": "Apt. 556",
                        "city": "Gwenborough",
                        "zipcode": "92998-3874",
                        "geo": {
                            "lat": "-37.3159",
                            "lng": "81.1496"
                        }
                        },
                        "phone": "1-770-736-8031 x56442",
                        "website": "hildegard.org",
                        "company": {
                        "name": "Romaguera-Crona",
                        "catchPhrase": "Multi-layered client-server neural-net",
                        "bs": "harness real-time e-markets"
                        }
                    }
                ])
            )
        })
    )

    beforeAll( () => server.listen() );
    afterEach( () => server.resetHandlers() );
    afterAll( () => server.close() ); 

    it("should render data", async() => {
        render(<Posts/>);

        const button = screen.getByRole("button", { name: "Buscar Usuários"});
        fireEvent.click(button);

        const name = await screen.findByText("Leanne Graham");

        expect(name).toBeInTheDocument();
    })

    it("should fetch users when the component is rendered", async () => {
        render(<Posts/>);

        const name = await screen.findByText("Leanne Graham");
        const userName = await screen.findByText("Bret");

        expect(name).toBeInTheDocument();
        expect(userName).toBeInTheDocument();
    })

})