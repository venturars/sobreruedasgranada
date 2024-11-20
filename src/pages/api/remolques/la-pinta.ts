import type { APIRoute } from "astro";
import { SMTPServerError, UnexpectedError } from "../../../tools/errors";
import createLaPintaRentRequest from "../../../logic/create-la-pinta-rent-request";

export const prerender = false;

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

    createLaPintaRentRequest({
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
    }).then((ok) => {
      if (!ok)
        throw new UnexpectedError(
          "Something went wrong while creating La Pinta rent request."
        );
      return new Response(null, {
        status: 200,
        statusText: "OK",
      });
    });
  } catch (error) {
    if (error instanceof TypeError)
      new Response(null, {
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
