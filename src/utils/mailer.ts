// require, not import: @types/nodemailer is not installed in this project.
const nodemailer = require("nodemailer");
import { config } from "../config";

export interface MailMessage {
  to: string;
  subject: string;
  text: string;
  html: string;
}

const MAIL_TIMEOUT_MS = 15000;

/**
 * Sends over Resend's HTTPS API (port 443).
 *
 * Most cloud hosts — DigitalOcean included — block outbound SMTP (25/465/587)
 * by default, so an SMTP transport that works locally silently times out in
 * production. HTTPS is never blocked, which is why this is the default path.
 */
async function sendViaResend(message: MailMessage): Promise<void> {
  if (!config.mail.resend_api_key) {
    throw new Error("RESEND_API_KEY is not set");
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), MAIL_TIMEOUT_MS);

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.mail.resend_api_key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `${config.mail.from_name} <${config.mail.from}>`,
        to: [message.to],
        subject: message.subject,
        text: message.text,
        html: message.html,
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      // Resend reports rejected sends as JSON; fall back to the raw body so a
      // gateway error page still ends up in the log instead of a parse crash.
      const body = await response.text();
      throw new Error(`Resend responded ${response.status}: ${body}`);
    }
  } catch (error: any) {
    if (error?.name === "AbortError") {
      throw new Error(`Resend request timed out after ${MAIL_TIMEOUT_MS}ms`);
    }
    throw error;
  } finally {
    clearTimeout(timeout);
  }
}

/**
 * Sends over Brevo's HTTPS API (port 443).
 *
 * Unlike Resend, Brevo allows a verified *single sender* address, so this path
 * works without owning a domain. Note that mail sent from a free-provider
 * address (gmail.com, etc.) fails DMARC alignment and is more likely to be
 * filtered as spam — verify a real domain in Brevo when you have one.
 */
async function sendViaBrevo(message: MailMessage): Promise<void> {
  if (!config.mail.brevo_api_key) {
    throw new Error("BREVO_API_KEY is not set");
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), MAIL_TIMEOUT_MS);

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        // Brevo uses a bare api-key header, not an Authorization bearer token.
        "api-key": config.mail.brevo_api_key,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        sender: { name: config.mail.from_name, email: config.mail.from },
        to: [{ email: message.to }],
        subject: message.subject,
        textContent: message.text,
        htmlContent: message.html,
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      const body = await response.text();
      throw new Error(`Brevo responded ${response.status}: ${body}`);
    }
  } catch (error: any) {
    if (error?.name === "AbortError") {
      throw new Error(`Brevo request timed out after ${MAIL_TIMEOUT_MS}ms`);
    }
    throw error;
  } finally {
    clearTimeout(timeout);
  }
}

/** Kept for local development, where outbound SMTP is not firewalled. */
async function sendViaSmtp(message: MailMessage): Promise<void> {
  if (!config.smtp.host) {
    throw new Error("SMTP_HOST is not set");
  }

  const transporter = nodemailer.createTransport({
    host: config.smtp.host,
    port: config.smtp.port,
    secure: config.smtp.secure, // true for 465 (SSL), false for 587 (TLS)
    auth: {
      user: config.smtp.user,
      pass: config.smtp.pass,
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: MAIL_TIMEOUT_MS,
  });

  await transporter.sendMail({
    from: `"${config.mail.from_name}" <${config.mail.from}>`,
    to: message.to,
    subject: message.subject,
    text: message.text,
    html: message.html,
    headers: {
      "X-Priority": "1",
      "X-Mailer": "Temu Shop Mailer",
    },
  });
}

/**
 * Sends a message through the configured provider. Throws on failure so the
 * caller can decide what the user sees — never swallow this silently.
 */
export async function sendMail(message: MailMessage): Promise<void> {
  switch (config.mail.provider) {
    case "brevo":
      return sendViaBrevo(message);
    case "resend":
      return sendViaResend(message);
    default:
      return sendViaSmtp(message);
  }
}
