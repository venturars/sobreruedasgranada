import type {
  EmailTemplate,
  LaPintaEmailRequestNotificationData,
} from "../interface";

type CreateLaPintaEmailRequestNotification = (
  sender: string,
  receiver: string,
  data: LaPintaEmailRequestNotificationData
) => EmailTemplate;

/**
 * Creates an email template to confirm a rental request.

 * This function generates an HTML email that summarizes a rental request, including 
 * customer information, rental details, and pricing. It's designed to be sent as a confirmation 
 * to the customer upon successful submission of a rental request.

 * @param sender The email address of the sender.
 * @param receiver The email address of the recipient.
 * @param data The rental request data, containing:
 * @returns An object representing the email template, with the following properties:
 *   The object typically has properties like `from`, `to`, `subject`, and `html`.
 */

const createEmail: CreateLaPintaEmailRequestNotification = (
  sender,
  receiver,
  {
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
  }
) => ({
  from: sender,
  to: receiver,
  subject: `Contacto remolque La Pinta de ${firstname}`,
  replyTo: email,
  html: `
<div>
<p>Hola Noel,</p>
        <p>Has recibido una nueva solicitud de alquiler de remolque:</p>
        <ul>
          <li>Nombre: ${firstname} ${lastname}</li>
          <li>DNI: ${dni}</li>
          <li>Email: ${email}</li>
          <li>Teléfono de contacto: ${phone}</li>
          <li>Tipo de alquiler: ${rentType}</li>
          <li>Accesorios: ${accessories}</li>
          <li>Horario de recogida: ${pickUpTime}</li>
          <li>Horario de entrega: ${deliveryTime}</li>
          <li>Fecha: ${JSON.parse(date.toString())[0]}${
    JSON.parse(date.toString()).length > 1
      ? " a " +
        JSON.parse(date.toString())[JSON.parse(date.toString()).length - 1]
      : ""
  }</li>
          <li>Precio del alquiler: ${rentalPrice}</li>
          <li>Fianza: ${guarantee}</li>
          <li>Importe de la reserva: ${reservationAmount}</li>
          <li>Importe a pagar en la recogida: ${pickUpPaymentAmount}</li>
          <li>Acuerdo del contrato: ${contractAgreement}</li>
          <li>Acuerdo de la web: ${webAgreement}</li>
        </ul>
</div>
      `,
});

export default createEmail;
