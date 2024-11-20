import type { LaPintaRentRequest } from "../interface";
import nodemailer from "nodemailer";
import createRequestNotification from "../emails/la-pinta-email-request-notification.ts";
import createRequestConfirmation from "../emails/la-pinta-email-request-confirmation.ts";

import { SMTPServerError } from "../tools/errors.ts";

const SMTP_USER = import.meta.env.SMTP_USER;
const SMTP_PASSWORD = import.meta.env.SMTP_PASSWORD;
const SMTP_HOST = import.meta.env.SMTP_PASSWORD;
const SMTP_PORT = import.meta.env.SMTP_PORT;

type CreateLaPintaRentRequest = (data: LaPintaRentRequest) => Promise<true>;

/**
 * Creates a new La Pinta rent request.
 *
 * This function takes a `LaPintaRentRequest` object containing all the necessary information for a new rental request.
 * It sends two emails: a notification email to the admin and a confirmation email to the user.
 *
 * @param data - The rental request data, including:
 *
 * @returns A Promise that resolves to `true` if the emails are sent successfully, or rejects with an error if there's an issue.
 *
 * @throws {TypeError} If any required data is missing.
 *
 * @throws {SMTPServerError} If there's an error sending the emails.
 */
const createLaPintaRentRequest: CreateLaPintaRentRequest = ({
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
}) => {
  if (
    !firstname ||
    !lastname ||
    !dni ||
    !email ||
    !phone ||
    !rentType ||
    !accessories ||
    !pickUpTime ||
    !deliveryTime ||
    !date ||
    !rentalPrice ||
    !guarantee ||
    !reservationAmount ||
    !pickUpPaymentAmount ||
    !contractAgreement ||
    !webAgreement
  )
    throw new TypeError("Some request data is not provided");

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: true,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASSWORD,
    },
  });

  (async () => {
    const responseCreateRequestNotification = await transporter.sendMail(
      createRequestNotification(SMTP_USER, SMTP_USER, {
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
      })
    );

    if (!responseCreateRequestNotification.accepted[0])
      throw new SMTPServerError(
        "Something went wrong sending request notification email"
      );

    const responseCreateRequestConfirmation = await transporter.sendMail(
      createRequestConfirmation(SMTP_USER, email, {
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
      })
    );
    if (!responseCreateRequestConfirmation.accepted[0])
      throw new SMTPServerError(
        "Something went wrong sending request confirmation email"
      );

    return true;
  })();

  return new Promise(() => {});
};

export default createLaPintaRentRequest;
