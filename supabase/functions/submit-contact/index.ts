import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "https://esm.sh/resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactSubmission {
  name: string;
  company: string;
  email: string;
  industry: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const resendApiKey = Deno.env.get("RESEND_API_KEY");

    // Create Supabase client with service role key for admin access
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const submission: ContactSubmission = await req.json();

    // Validate required fields
    if (!submission.name || !submission.company || !submission.email || !submission.industry || !submission.message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Store submission in database
    const { data: dbData, error: dbError } = await supabase
      .from("contact_submissions")
      .insert({
        name: submission.name,
        company: submission.company,
        email: submission.email,
        industry: submission.industry,
        message: submission.message,
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to save submission" }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log("Contact submission saved:", dbData.id);

    // Send email notification if Resend is configured
    if (resendApiKey) {
      const resend = new Resend(resendApiKey);

      // Send notification to sales team
      try {
        await resend.emails.send({
          from: "Autonomix Website <onboarding@resend.dev>",
          to: ["solutions@autonomix.in"], // Replace with actual sales email
          subject: `New Contact Form Submission from ${submission.name}`,
          html: `
            <h1>New Contact Form Submission</h1>
            <p><strong>Name:</strong> ${submission.name}</p>
            <p><strong>Company:</strong> ${submission.company}</p>
            <p><strong>Email:</strong> ${submission.email}</p>
            <p><strong>Industry:</strong> ${submission.industry}</p>
            <p><strong>Message:</strong></p>
            <p>${submission.message.replace(/\n/g, "<br>")}</p>
            <hr>
            <p><small>Submitted at: ${new Date().toISOString()}</small></p>
          `,
        });
        console.log("Sales notification email sent");
      } catch (emailError) {
        console.error("Failed to send sales notification:", emailError);
      }

      // Send confirmation to user
      try {
        await resend.emails.send({
          from: "Autonomix <onboarding@resend.dev>",
          to: [submission.email],
          subject: "Thank you for contacting Autonomix",
          html: `
            <h1>Thank you for reaching out, ${submission.name}!</h1>
            <p>We have received your message and our team will review your inquiry shortly.</p>
            <p>One of our automation experts will get back to you within 24 business hours.</p>
            <hr>
            <p><strong>Your submission:</strong></p>
            <p><strong>Company:</strong> ${submission.company}</p>
            <p><strong>Industry:</strong> ${submission.industry}</p>
            <p><strong>Message:</strong></p>
            <p>${submission.message.replace(/\n/g, "<br>")}</p>
            <hr>
            <p>Best regards,<br>The Autonomix Team</p>
            <p>📞 +91 1800-123-4567</p>
            <p>📧 solutions@autonomix.in</p>
          `,
        });
        console.log("Confirmation email sent to user");
      } catch (emailError) {
        console.error("Failed to send confirmation email:", emailError);
      }
    } else {
      console.log("Resend API key not configured, skipping emails");
    }

    return new Response(
      JSON.stringify({ success: true, id: dbData.id }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("Error in submit-contact function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
