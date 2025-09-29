import nodemailer from "nodemailer";

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_SECURE,
  SMTP_USER,
  SMTP_PASS,
  SMTP_FROM,
  SMTP_TO
} = process.env;

const transport = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT ? Number(SMTP_PORT) : 465,
  secure: SMTP_SECURE ? SMTP_SECURE === "true" : true,
  auth:
    SMTP_USER && SMTP_PASS
      ? {
          user: SMTP_USER,
          pass: SMTP_PASS
        }
      : undefined
});

export async function sendMail({
  subject,
  text,
  html
}: {
  subject: string;
  text: string;
  html?: string;
}) {
  if (!SMTP_FROM || !SMTP_TO) {
    throw new Error("SMTP_FROM and SMTP_TO must be configured.");
  }

  await transport.sendMail({
    from: SMTP_FROM,
    to: SMTP_TO,
    subject,
    text,
    html
  });
}
