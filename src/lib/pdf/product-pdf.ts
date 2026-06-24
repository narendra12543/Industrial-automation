import {
  PDFDocument,
  StandardFonts,
} from "pdf-lib";

interface ProductPdfData {
  productName: string;
  categoryName: string;
  shortDescription?: string | null;
  description?: string | null;
  specifications?: string | null;
  features?: string | null;
  applications?: string | null;
}

export async function generateProductPdf(
  data: ProductPdfData
): Promise<Uint8Array> {
  const pdfDoc =
    await PDFDocument.create();

  const page =
    pdfDoc.addPage([
      595,
      842,
    ]);

  const {
    height,
  } = page.getSize();

  const font =
    await pdfDoc.embedFont(
      StandardFonts.Helvetica
    );

  const boldFont =
    await pdfDoc.embedFont(
      StandardFonts.HelveticaBold
    );

  const specifications =
  data.specifications
    ? typeof data.specifications ===
      "string"
      ? JSON.parse(
          data.specifications
        )
      : data.specifications
    : {};

const features =
  data.features
    ? typeof data.features ===
      "string"
      ? JSON.parse(
          data.features
        )
      : data.features
    : [];

const applications =
  data.applications
    ? typeof data.applications ===
      "string"
      ? JSON.parse(
          data.applications
        )
      : data.applications
    : [];   

  let y = height - 50;

  // Header

  page.drawText(
    "Industrial Automation Solutions",
    {
      x: 40,
      y,
      size: 20,
      font: boldFont,
    }
  );

  y -= 30;

  page.drawText(
    `Generated: ${new Date().toLocaleDateString()}`,
    {
      x: 40,
      y,
      size: 10,
      font,
    }
  );

  y -= 40;

  // Product Information

  page.drawText(
    "Product Information",
    {
      x: 40,
      y,
      size: 16,
      font: boldFont,
    }
  );

  y -= 30;

  page.drawText(
    `Product Name: ${data.productName}`,
    {
      x: 40,
      y,
      size: 12,
      font,
    }
  );

  y -= 20;

  page.drawText(
    `Category: ${data.categoryName}`,
    {
      x: 40,
      y,
      size: 12,
      font,
    }
  );

  y -= 35;

  // Short Description

  page.drawText(
    "Short Description",
    {
      x: 40,
      y,
      size: 14,
      font: boldFont,
    }
  );

  y -= 22;

  page.drawText(
    data.shortDescription ||
      "Not Available",
    {
      x: 40,
      y,
      size: 11,
      font,
      maxWidth: 500,
    }
  );

  y -= 50;

  // Description

  page.drawText(
    "Description",
    {
      x: 40,
      y,
      size: 14,
      font: boldFont,
    }
  );

  y -= 22;

  page.drawText(
    data.description ||
      "Not Available",
    {
      x: 40,
      y,
      size: 11,
      font,
      maxWidth: 500,
    }
  );

  y -= 80;

  // Specifications

  page.drawText(
    "Specifications",
    {
      x: 40,
      y,
      size: 14,
      font: boldFont,
    }
  );

  y -= 25;

  if (
    Object.keys(
      specifications
    ).length === 0
  ) {
    page.drawText(
      "Not Available",
      {
        x: 40,
        y,
        size: 11,
        font,
      }
    );

    y -= 20;
  } else {
    Object.entries(
      specifications
    ).forEach(
      ([key, value]) => {
        page.drawText(
          `${key}: ${value}`,
          {
            x: 40,
            y,
            size: 11,
            font,
          }
        );

        y -= 18;
      }
    );
  }

  y -= 20;

  // Features

  page.drawText(
    "Features",
    {
      x: 40,
      y,
      size: 14,
      font: boldFont,
    }
  );

  y -= 25;

  if (
    features.length === 0
  ) {
    page.drawText(
      "Not Available",
      {
        x: 40,
        y,
        size: 11,
        font,
      }
    );

    y -= 20;
  } else {
    features.forEach(
      (
        feature: string
      ) => {
        page.drawText(
          `• ${feature}`,
          {
            x: 40,
            y,
            size: 11,
            font,
          }
        );

        y -= 18;
      }
    );
  }

  y -= 20;

  // Applications

  page.drawText(
    "Applications",
    {
      x: 40,
      y,
      size: 14,
      font: boldFont,
    }
  );

  y -= 25;

  if (
    applications.length === 0
  ) {
    page.drawText(
      "Not Available",
      {
        x: 40,
        y,
        size: 11,
        font,
      }
    );

    y -= 20;
  } else {
    applications.forEach(
      (
        application: string
      ) => {
        page.drawText(
          `• ${application}`,
          {
            x: 40,
            y,
            size: 11,
            font,
          }
        );

        y -= 18;
      }
    );
  }

  y -= 30;

  // Contact Information

  page.drawText(
    "Contact Information",
    {
      x: 40,
      y,
      size: 14,
      font: boldFont,
    }
  );

  y -= 25;

  page.drawText(
    "Industrial Automation Solutions",
    {
      x: 40,
      y,
      size: 11,
      font,
    }
  );

  y -= 18;

  page.drawText(
    "Email: info@industrialautomation.com",
    {
      x: 40,
      y,
      size: 11,
      font,
    }
  );

  y -= 18;

  page.drawText(
    "Phone: +91 9876543210",
    {
      x: 40,
      y,
      size: 11,
      font,
    }
  );

  y -= 18;

  page.drawText(
    "Website: www.industrialautomation.com",
    {
      x: 40,
      y,
      size: 11,
      font,
    }
  );

  return await pdfDoc.save();
}