import { NextResponse } from "next/server";
import { Resend } from "resend";
import { COMPANY } from "@/lib/company";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Email is not configured yet. Please call or email us directly." },
        { status: 503 },
      );
    }

    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in name, email, and project details." },
        { status: 400 },
      );
    }

    const to = process.env.CONTACT_TO_EMAIL || COMPANY.email;
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "Penny Street Website <onboarding@resend.dev>",
      to: [to],
      replyTo: email,
      subject: `Free estimate request from ${name}`,
      text: [
        "New free estimate request from the Penny Street website:",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        "",
        "Project details:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Could not send your message. Please call or email us directly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please call or email us directly." },
      { status: 500 },
    );
  }
}
