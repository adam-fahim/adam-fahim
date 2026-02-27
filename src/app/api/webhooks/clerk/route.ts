import { NextRequest, NextResponse } from "next/server";
import { sendFeedbackNotification } from "@/lib/resend";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { type, data } = body;

  switch (type) {
    case "user.created": {
      console.log("New user created:", data.id);

      const email = data.email_addresses?.[0]?.email_address;
      if (email) {
        await sendFeedbackNotification(email, "Welcome to Feedbase!");
      }
      break;
    }
    case "user.updated": {
      console.log("User updated:", data.id);
      break;
    }
    case "user.deleted": {
      console.log("User deleted:", data.id);
      break;
    }
    default:
      console.log("Unhandled webhook type:", type);
  }

  return NextResponse.json({ received: true });
}
