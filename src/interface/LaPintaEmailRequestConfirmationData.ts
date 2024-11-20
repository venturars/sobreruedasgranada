import type { LaPintaRentRequest } from "./LaPintaRentRequest";

interface LaPintaEmailRequestConfirmationData
  extends Omit<
    LaPintaRentRequest,
    | "reservationAmount"
    | "pickUpPaymentAmount"
    | "contractAgreement"
    | "webAgreement"
  > {}

export type { LaPintaEmailRequestConfirmationData };
