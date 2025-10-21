// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(request) {
//   try {
//     const { name, business, inquiry, email, phone } = await request.json();

//     await resend.emails.send({
//       from: "Pinpoints NG <onboarding@resend.dev>", //Add dad's custom domain
//       to: "aloziena@yahoo.co.uk",
//       subject: `Inquiry from ${name}`,
//       text: `
//         Name: ${name}
//         Business: ${business || "N/A"}
//         Email: ${email}
//         Phone: ${phone}
//         Inquiry: ${inquiry}
//       `,
//     });

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ success: false, error: error.message }, { status: 500 });
//   }
// }
