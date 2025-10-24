import { Resend } from "resend";
import { NextResponse } from "next/server";
import { ContactModal } from "../../components/ContactModal";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    // console.log("✅ POST request received at /api/sendEmail");

    const body = await req.json();
    console.log("📩 Incoming data:", body);

    const { name, email, phone, business, inquiry } = body;

    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // use this first
      to: "delivered@resend.dev",  // where you want to receive messages
      subject: `New Inquiry from ${name || "Unknown"}`,
      html: `
        <h3>New Inquiry Received</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Business:</strong> ${business}</p>
        <p><strong>Message:</strong> ${inquiry}</p>
      `,
    });

    console.log("✅ Email sent successfully:", data);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return NextResponse.json({ success: false, error });
  }
}

export async function GET() {
  return NextResponse.json({ message: "Use POST for this route." }, { status: 405 });
}
