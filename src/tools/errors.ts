export class BadRequestError extends Error {
  constructor(message: string = "") {
    super(message);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, BadRequestError);
    }
  }
}

export class SMTPServerError extends Error {
  constructor(message: string = "") {
    super(message);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, SMTPServerError);
    }
  }
}

export class UnexpectedError extends Error {
  constructor(message: string = "") {
    super(message);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, UnexpectedError);
    }
  }
}
