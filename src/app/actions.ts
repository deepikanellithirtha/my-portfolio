"use server";
import { Resend } from 'resend';

// Initialize Resend with your API Key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function handleContactForm(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>', // Keep this for now for testing
      to: 'deepikanellithirtha@gmail.com',        // Your email
      subject: `New Message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { success: false };
    }

    return { success: true };
  } catch (err) {
    console.error("Server Error:", err);
    return { success: false };
  }
}