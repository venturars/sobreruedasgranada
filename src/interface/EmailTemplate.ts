interface EmailTemplate {
  from: string;
  to: string;
  subject: string;
  replyTo?: string;
  html: string;
}

export type { EmailTemplate };
