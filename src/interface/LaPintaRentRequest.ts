interface LaPintaRentRequest {
  firstname: string;
  lastname: string;
  dni: string;
  email: string;
  phone: string;
  rentType: string;
  accessories: boolean;
  pickUpTime: string;
  deliveryTime: string;
  date: string;
  rentalPrice: string;
  guarantee: string;
  reservationAmount: string;
  pickUpPaymentAmount: string;
  contractAgreement: boolean;
  webAgreement: boolean;
}

export type { LaPintaRentRequest };
