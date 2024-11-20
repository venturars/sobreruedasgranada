import type { LaPintaRentRequest } from "./LaPintaRentRequest";

interface LaPintaEmailRequestNotificationData
  extends Omit<
    LaPintaRentRequest,
    | "reservationAmount"
    | "pickUpPaymentAmount"
    | "contractAgreement"
    | "webAgreement"
  > {}

export type { LaPintaEmailRequestNotificationData };
