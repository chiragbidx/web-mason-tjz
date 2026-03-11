import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (
      !name ||
      !email ||
      !message ||
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      name.length < 2 ||
      !email.match(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/) ||
      message.length < 10
    ) {
      return NextResponse.json(
        { error: "Invalid input. Please provide your name, valid email, and a proper message." },
        { status: 400 }
      );
    }

    // NOTE: For production, use SendGrid/mail provider; here, we simulate server-side send/log
    // SendGrid or nodemailer logic would go here!
    console.log(
      `[ContactForm] New message from ${name} <${email}>: ${message}`
    );

    // Simulate successful send; replace with email helper if production
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: "Failed to process request." }, { status: 500 });
  }
}