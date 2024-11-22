export interface Locales {
  pages: {
    landing: LandingPage;
    trailers: TrailersPage;
    utilityVehicles: UtilityVehiclesPage;
    location: LocationPage;
    privacyPolicy: StaticPage;
    terms: StaticPage;
    laPinta: ProductPage;
    sprinterCaja: ProductPage;
  };
  sections: {
    trailers: ProductsSection;
    utilityVehicles: ProductsSection;
    location: LocationSection;
    solutions: SolutionsSection;
  };
  footer: Footer;
  header: Header;
  modals: {
    contact: ModalContact;
  };
  floatingButton: FloatingButton;
}

export interface Metadata {
  title: string;
  description: string;
  keywords?: string;
}

export interface Link {
  href: string;
  text: string;
  rel?: string;
  target?: string;
}

export interface Image {
  src: string;
  alt: string;
}

export interface Faqs {
  title: string;
  questions: [string, string][];
}

export interface FloatingButton {
  href: string;
}

export interface Intro {
  text: string;
}

export interface ProductDetails {
  specificationsSheet: {
    tabTitle: string;
    specifications: [string, string][];
    disclaimer: string;
  };
  bookingConditions: {
    tabTitle: string;
    text: string;
    action: {
      text: string;
      href: string;
      target?: string;
    };
  };
}

export interface ServicePresentation {
  images: Image[];
  title: string;
  paragraph: string;
  actionButton: Link;
}

export interface StaticPage {
  metadata: Metadata;
  text: string;
}

export interface FirstView {
  title: string;
  subtitle: string;
  text: string;
  accionButton: Link;
  links: {
    booking: Link;
    information: Link;
  };
  labels: {
    license: string;
  };
  image?: Image;
  images?: Image[];
}

export interface BookingForm {
  title: string;
  personalData: {
    title: string;
    fields: {
      firstname: FormField;
      lastname: FormField;
      dni: FormField;
      email: FormField;
      phone: FormField;
    };
    disclaimer: string;
  };
  bookingType: {
    title: string;
    fields: {
      rentType: FormFieldWithOptions;
      accessories: FormFieldWithOptions;
    };
  };
  dateTime: {
    title: string;
    fields: {
      pickUpTime: {
        label: string;
      };
      deliveryTime: {
        label: string;
      };
    };
    disclaimer: string;
  };
  bookingConditions: {
    title: string;
    fields: {
      rentalPrice: {
        label: string;
      };
      guarantee: {
        label: string;
      };
      reservationAmount: {
        label: string;
      };
      pickUpPaymentAmount: {
        label: string;
      };
    };
    agreements: {
      contract: {
        text: string;
      };
      web: {
        text: string;
      };
    };
    disclaimer: string;
  };
  errorMessage: string;
  submitButton: string;
  modalSuccess: ModalSuccess;
  modalError: ModalError;
}

interface FormField {
  label: string;
  placeholder: string;
}

interface FormFieldWithOptions extends FormField {
  options: string[];
}

export interface LandingPage {
  metadata: Metadata;
  firstView: FirstView;
  intro: Intro;
  bridge: Intro;
  bridge2: Intro;
  trailers: ServicePresentation;
  utilityVehicles: ServicePresentation;
}

export interface TrailersPage {
  metadata: Metadata;
  firstView: FirstView;
  intro: Intro;
  faqs: Faqs;
}

interface UtilityVehiclesPage extends TrailersPage {}

export interface LocationPage {
  metadata: Metadata;
}

export interface ProductPage {
  metadata: Metadata;
  firstView: FirstView;
  details: ProductDetails;
  bookingForm: BookingForm;
}

export interface Product {
  title: string;
  description: string;
  images: Image[];
  links: {
    booking: Link;
    information: Link;
  };
  labels: {
    license: string;
  };
}

export interface ProductsSection {
  title: string;
  products: Product[];
}

export interface LocationSection {
  title: string;
  paragraph1: string;
  paragraph2: string;
}

export interface SolutionsSection {
  title: string;
  solutions: {
    link: Link;
    paragraph: string;
    image: Image;
  }[];
}

export interface Footer {
  email: string;
  phone: string;
  domain: string;
  copyright: string;
  links: {
    terms: Link;
    privacyPolicy: Link;
  };
}

export interface Header {
  mobileTitle: string;
  contactButton: {
    text: string;
  };
  navItems: Link[];
}

export interface ModalContact {
  title: string;
  paragraph: string;
  callButton: Link;
  whatsappButton: Link;
}
export interface ModalSuccess {
  title: string;
  text: string;
}

export interface ModalError {
  title: string;
  text: string;
  contactButtons: {
    call: Link;
    whatsapp: Link;
  };
}
