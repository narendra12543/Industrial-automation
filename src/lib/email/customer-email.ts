import { resend } from "@/lib/resend";

interface SendCustomerEmailProps {
  customerEmail: string;
  customerName: string;
  productName: string;
  pdfBuffer: Uint8Array;
}

export async function sendCustomerEmail({
  customerEmail,
  customerName,
  productName,
  pdfBuffer,
}: SendCustomerEmailProps) {
  try {
    console.log(
      "Sending customer email to:",
      customerEmail
    );

    const result =
      await resend.emails.send({
        from:
          process.env.FROM_EMAIL!,

        to: customerEmail,

        subject:
          "Product Information Request Received",

        html: `
          <div style="font-family: Arial, sans-serif;">
            <h2>
              Thank You ${customerName}
            </h2>

            <p>
              We have received your enquiry
              for <strong>${productName}</strong>.
            </p>

            <p>
              Product information PDF is attached.
            </p>

            <p>
              Our team will contact you shortly.
            </p>

            <br />

            <p>
              Regards,<br />
              Industrial Automation Solutions
            </p>
          </div>
        `,

        attachments: [
          {
            filename:
              `${productName}.pdf`,

            content:
              Buffer.from(
                pdfBuffer
              ),
          },
        ],
      });

    console.log(
      "CUSTOMER EMAIL RESULT:"
    );

    console.log(result);

    return {
      success: true,
      data: result,
    };
  } catch (error) {
    console.error(
      "CUSTOMER EMAIL ERROR:"
    );

    console.error(error);

    return {
      success: false,
    };
  }
}