import type { APIRoute } from "astro";

export const prerender = false;

/**
 * Handles POST requests to create a new Sprinter Caja rent request.
 */
export const POST: APIRoute = async ({}) => {
  return new Response(null, {
    status: 200,
    statusText: "OK",
  });
};
