import { mkdir, writeFile } from "fs/promises";
import path from "path";

const ALLOWED_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
] as const;

const MAX_FILE_SIZE = 5 * 1024 * 1024;

export async function validateProductImage(
  file: File
): Promise<{
  success: boolean;
  message?: string;
}> {
  if (!file) {
    return {
      success: false,
      message: "Image file is required.",
    };
  }

  if (!ALLOWED_TYPES.includes(file.type as (typeof ALLOWED_TYPES)[number])) {
    return {
      success: false,
      message:
        "Only JPG, JPEG, PNG and WEBP images are allowed.",
    };
  }

  if (file.size > MAX_FILE_SIZE) {
    return {
      success: false,
      message:
        "Image size cannot exceed 5 MB.",
    };
  }

  return {
    success: true,
  };
}

export async function saveProductImage(
  productId: string,
  file: File
): Promise<{
  imageUrl: string;
}> {
  const uploadDir = path.join(
    process.cwd(),
    "public",
    "uploads",
    "products"
  );

  await mkdir(uploadDir, {
    recursive: true,
  });

  const extension =
    file.name.split(".").pop()?.toLowerCase() ??
    "webp";

  const uniqueFilename = `product-${productId}-${Date.now()}.${extension}`;

  const filePath = path.join(
    uploadDir,
    uniqueFilename
  );

  const buffer = Buffer.from(
    await file.arrayBuffer()
  );

  await writeFile(filePath, buffer);

  return {
    imageUrl: `/uploads/products/${uniqueFilename}`,
  };
}