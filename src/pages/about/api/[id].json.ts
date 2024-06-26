import type { APIRoute } from "astro";

const user = {
    name: "John Doe",
    email: "corre@hotmail.com",
};

export const GET: APIRoute = async ({ params, request }) => {
    const id = params.id;
    return new Response(
        JSON.stringify({user}),
    )
}