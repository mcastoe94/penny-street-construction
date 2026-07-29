import { NextResponse } from "next/server";
import { COMPANY } from "@/lib/company";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Please fill in name, email, and project details." }, { status: 400 });
    }

    const res = await fetch(`https://formsubmit.co/ajax/${COMPANY.email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone: phone || "Not provided",
        message,
        _subject: `Penny Street — Free estimate request from ${name}`,
        _template: "table",
        _captcha: "false",
      }),
    });

    const data = (await res.json().catch(() => ({}))) as { success?: string; message?: string };

    if (!res.ok) {
      return NextResponse.json(
        { error: data.message || "Could not send your message. Please call us instead." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please call or email us directly." },
      { status: 500 },
    );
  }
}
