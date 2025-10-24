import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("📩 Received application data:", body);

    const {
      fullName,
  dob,
  gender,
  email,
  phone,
  country,
  contactMode,
  canReadWrite,
  hasEducation,
  qualification,
  fieldOfStudy,
  institution,
  graduationYear,
  occupation,
  organization,
  experienceYears,
  relevantExperience,
  experienceDetails,
  motivation,
  goal,
  applicationArea,
  trainingFormat,
  preferredSchedule,
  availability,
  certification,
  referralSource,
  referralName,
    } = body;

    const htmlContent = `
      <h2>📋 New Debt Management Consultant Application</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Preferred Mode of Contact:</strong> ${contactMode}</p>
        <hr/>
        <p><strong>Can Read & Write:</strong> ${canReadWrite}</p>
        <p><strong>Has Educational Background:</strong> ${hasEducation}</p>
        ${
          hasEducation === "Yes"
            ? `
            <p><strong>Highest Qualification:</strong> ${qualification || "N/A"}</p>
            <p><strong>Field of Study:</strong> ${fieldOfStudy || "N/A"}</p>
            <p><strong>Institution:</strong> ${institution || "N/A"}</p>
            <p><strong>Graduation Year:</strong> ${graduationYear || "N/A"}</p>
          `
            : ""
        }
        <hr/>
        <p><strong>Current Occupation:</strong> ${occupation || "N/A"}</p>
        <p><strong>Organization:</strong> ${organization || "N/A"}</p>
        <p><strong>Years of Experience:</strong> ${experienceYears || "N/A"}</p>
        <p><strong>Relevant Experience in Finance/Law/Consulting:</strong> ${relevantExperience}</p>
        ${
          relevantExperience === "Yes"
            ? `<p><strong>Experience Details:</strong> ${experienceDetails || "N/A"}</p>`
            : ""
        }
        <hr/>
        <p><strong>Motivation:</strong> ${motivation}</p>
        <p><strong>Goal:</strong> ${goal}</p>
        <p><strong>Application Area:</strong> ${applicationArea}</p>
        <hr/>
        <p><strong>Training Format:</strong> ${trainingFormat}</p>
        <p><strong>Preferred Schedule:</strong> ${preferredSchedule}</p>
        <p><strong>Availability:</strong> ${availability}</p>
        <p><strong>Interested in Certification:</strong> ${certification}</p>
        <hr/>
        <p><strong>Referral Source:</strong> ${referralSource}</p>
        ${
          referralSource === "Referral"
            ? `<p><strong>Referral Name/Organization:</strong> ${referralName || "N/A"}</p>`
            : ""
        }
    `;

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "delivered@resend.dev", // replace with your actual receiver email
      subject: `New Consultant Application – ${fullName}`,
      html: htmlContent,
    });

    console.log("✅ Email sent successfully:", data);
    return NextResponse.json({ success: true, message: "Application submitted successfully." });
  } catch (error) {
    console.error("❌ Error submitting application:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: "Use POST for this route." }, { status: 405 });
}
