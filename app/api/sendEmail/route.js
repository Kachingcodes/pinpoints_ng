import { Resend } from "resend";
import { NextResponse } from "next/server";
import { ContactModal } from "../../components/ContactModal";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {

    const body = await req.json();
    console.log("📩 Incoming data:", body);

    const { name, email, phone, business, inquiry } = body;

    const data = await resend.emails.send({
      from: "Pinpoints Nigeria Limited <noreply@pinpointsng.com>", 
      to: "aloziena@yahoo.co.uk",  // where you want to receive messages
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

    // Send confirmation email to USER
    const userEmail = await resend.emails.send({
      from: "Pinpoints <noreply@pinpointsng.com>",
      to: email,
      subject: "Your Application Has Been Received",
      html: `
        <h2>Hello ${name},</h2>
        <p>Thank you for contacting us! We’ve received your inquiry and our team will get back to you shortly.</p>
        <p>Best regards,<br><strong>The Pinpoints Team</strong></p>
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
