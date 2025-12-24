import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Validation schema matching the form
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate the data
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          details: validationResult.error.issues,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // Log the form submission (in production, this would send an email or save to database)
    console.log("Contact form submission received:", {
      name: data.name,
      email: data.email,
      phone: data.phone || "Not provided",
      service: data.service,
      message: data.message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Add email sending logic here
    // Example with Resend, SendGrid, or similar:
    // await sendEmail({
    //   to: 'info@medicalservicecompany.com',
    //   subject: `New Contact Form Submission - ${data.service}`,
    //   html: generateEmailTemplate(data),
    // });

    // TODO: Save to database
    // Example with Prisma:
    // await prisma.contactSubmission.create({
    //   data: {
    //     name: data.name,
    //     email: data.email,
    //     phone: data.phone,
    //     service: data.service,
    //     message: data.message,
    //   },
    // });

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Your message has been received. We'll contact you soon!",
        data: {
          name: data.name,
          email: data.email,
          service: data.service,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);

    return NextResponse.json(
      {
        success: false,
        error: "An error occurred while processing your request",
        message: "Please try again later or contact us directly.",
      },
      { status: 500 }
    );
  }
}

// Optional: Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    {
      error: "Method not allowed",
      message: "This endpoint only accepts POST requests",
    },
    { status: 405 }
  );
}
