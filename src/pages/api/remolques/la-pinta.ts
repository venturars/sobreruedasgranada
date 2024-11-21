import type { APIRoute } from "astro";
import { SMTPServerError, UnexpectedError } from "../../../tools/errors";
import createLaPintaRentRequest from "../../../logic/create-la-pinta-rent-request";

export const prerender = false;

/**
 * Handles POST requests to create a new La Pinta rent request.
 *
 * This endpoint extracts rental request data from the incoming request body,
 * creates a new rent request, and sends confirmation and notification emails.
 *
 * **Request Body:**
 * - `firstname`: The customer's first name (required).
 * - `lastname`: The customer's last name (required).
 * - `dni`: The customer's National Identification Number (required).
 * - `email`: The customer's email address (required).
 * - `phone`: The customer's phone number (required).
 * - `rentType`: The type of rental (required).
 * - `accessories`: Whether accessories are requested (boolean, required).
 * - `pickUpTime`: The scheduled pickup time (required).
 * - `deliveryTime`: The scheduled delivery time (required).
 * - `date`: The rental date (required).
 * - `rentalPrice`: The total rental price (required).
 * - `guarantee`: The required deposit or guarantee amount (required).
 * - `reservationAmount`: The reservation amount paid (required).
 * - `pickUpPaymentAmount`: The amount paid at pickup (required).
 * - `contractAgreement`: Indicates if the contract agreement was accepted (boolean, required).
 * - `webAgreement`: Indicates if the web agreement was accepted (boolean, required).
 *
 * **Response:**
 * - **200 OK:** If the request is successful.
 * - **400 Bad Request:** If the request data is invalid or missing.
 * - **500 Server Error:** If an unexpected error occurs or email sending fails.
 *
 * @param request The Astro request object.
 * @returns A Promise that resolves to an HTTP response.
 */
export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const firstname = data.get("firstname") as string;
    const lastname = data.get("lastname") as string;
    const dni = data.get("dni") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const rentType = data.get("rentType") as string;
    const accessories = Boolean(data.get("accessories") as string);
    const pickUpTime = data.get("pickUpTime") as string;
    const deliveryTime = data.get("deliveryTime") as string;
    const date = data.get("date") as string;
    const rentalPrice = data.get("rentalPrice") as string;
    const guarantee = data.get("guarantee") as string;
    const reservationAmount = data.get("reservationAmount") as string;
    const pickUpPaymentAmount = data.get("pickUpPaymentAmount") as string;
    const contractAgreement = Boolean(data.get("contractAgreement") as string);
    const webAgreement = Boolean(data.get("webAgreement") as string);

    const ok = await createLaPintaRentRequest({
      firstname,
      lastname,
      dni,
      email,
      phone,
      rentType,
      accessories,
      pickUpTime,
      deliveryTime,
      date,
      rentalPrice,
      guarantee,
      reservationAmount,
      pickUpPaymentAmount,
      contractAgreement,
      webAgreement,
    });

    if (!ok)
      throw new UnexpectedError(
        "Something went wrong while creating La Pinta rent request."
      );
    return new Response(null, {
      status: 200,
      statusText: "OK",
    });
  } catch (error) {
    if (error instanceof TypeError)
      return new Response(null, {
        status: 400,
        statusText: "Bad Request: Some request data is not provided",
      });

    if (error instanceof SMTPServerError)
      return new Response(null, {
        status: 500,
        statusText: "SMTP Server Error: Email notification is not delivered",
      });
    if (error instanceof Error) {
      console.error(error.message);
    } else console.error("ERROR: ", error);
    return new Response(null, {
      status: 500,
      statusText: "Server Error",
    });
  }
};
