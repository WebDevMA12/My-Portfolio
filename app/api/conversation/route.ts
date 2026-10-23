import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { buildEmailHtml } from "../../lib/emailTemplate";

interface Payload {
  topic?: string;
  message?: string;
  stage?: string;
  name?: string;
  email?: string;
}

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = (body.name ?? "").replace(/[\r\n]+/g, " ").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();
  const topic = body.topic?.trim() || "Not specified";
  const stage = body.stage?.trim() || "Not specified";

  if (!name || name.length > 100)
    return NextResponse.json({ error: "Enter a valid name." }, { status: 400 });
  if (!emailRe.test(email) || email.length > 200)
    return NextResponse.json({ error: "Enter a valid email." }, { status: 400 });
  if (message.length < 20 || message.length > 5000)
    return NextResponse.json(
      { error: "Describe your project in 20–5000 characters." },
      { status: 400 }
    );

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_TO } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !MAIL_TO) {
    console.error("Missing SMTP env vars");
    return NextResponse.json({ error: "Server is not configured." }, { status: 500 });
  }

  const port = Number(SMTP_PORT ?? 465);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio" <${SMTP_USER}>`,
      to: MAIL_TO,
      replyTo: `"${name}" <${email}>`, // hitting Reply answers the client directly
      subject: `New conversation from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\nStage: ${stage}\n\n${message}`,
      html: buildEmailHtml({ name, email, topic, stage, message }),
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Mail error:", err);
    return NextResponse.json(
      { error: "Could not send your message." },
      { status: 500 }
    );
  }
};
