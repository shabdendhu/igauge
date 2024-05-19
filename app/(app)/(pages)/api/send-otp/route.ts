// app/api/send-otp/route.ts
import { NextResponse } from "next/server";
import { Twilio } from "twilio";
import payload from "payload";
import config from "@/payload.config";
// Twilio credentials
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new Twilio(accountSid, authToken);

export async function POST(req: Request) {
  const { phoneNumber } = await req.json();
  const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a 6-digit OTP
  const expiresAt = new Date(Date.now() + 10 * 60000); // OTP expires in 10 minutes
  //   console.log(phoneNumber, otp, expiresAt);
  try {
    // Check if the user exists
    await payload.init({ config });
    const users = await payload.find({
      collection: "users",
      where: {
        phoneNumber: {
          equals: phoneNumber,
        },
      },
    });
    console.log(users, "test");
    let userId;
    if (users.docs.length === 0) {
      // If the user doesn't exist, create a new user
      const newUser = await payload.create({
        collection: "users",
        data: {
          phoneNumber,
          // Add any other required fields with default values
          name: "Default Name",
          gender: "other",
          dob: new Date().toISOString(),
          state: "Default State",
          city: "Default City",
          userCategory: "user",
        },
      });
      userId = newUser.id;
    } else {
      // If the user exists, get the userId
      userId = users.docs[0].id;
    }

    // Send OTP via Twilio
    await client.messages.create({
      body: `Your verification code is ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phoneNumber,
    });

    // Store OTP in Payload CMS
    await payload.create({
      collection: "otps",
      data: {
        userId,
        otp,
        expiresAt,
        isUsed: false,
      },
    });

    return NextResponse.json({ message: "OTP sent successfully" });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
