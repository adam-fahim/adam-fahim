import { Resend } from "resend";

export const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function sendFeedbackNotification(to: string, feedbackTitle: string) {
  if (!resend) return null;

  return resend.emails.send({
    from: "Feedbase <notifications@feedbase.app>",
    to,
    subject: `New feedback: ${feedbackTitle}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #6366f1;">New Feedback Received</h2>
        <p>You have new feedback on your board:</p>
        <div style="background: #f9fafb; border-radius: 8px; padding: 16px; margin: 16px 0;">
          <strong>${feedbackTitle}</strong>
        </div>
        <a href="https://feedbase.app/dashboard" 
           style="display: inline-block; background: #6366f1; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none;">
          View Dashboard
        </a>
      </div>
    `,
  });
}
