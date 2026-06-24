import { z } from "zod";

const VALIDATION_MESSAGES = {
  CATEGORY_ID_REQUIRED: "Category is required.",
  NAME_REQUIRED: "Product name is required.",
  NAME_MIN: "Product name must be at least 3 characters.",
  NAME_MAX: "Product name cannot exceed 255 characters.",
  SLUG_REQUIRED: "Product slug is required.",
  SLUG_MIN: "Product slug must be at least 3 characters.",
  SLUG_MAX: "Product slug cannot exceed 255 characters.",
  SLUG_INVALID:
    "Slug must contain only lowercase letters, numbers, and hyphens.",
  SHORT_DESCRIPTION_MAX:
    "Short description cannot exceed 500 characters.",
  BROCHURE_URL_INVALID:
    "Brochure URL must be a valid URL.",
  DATASHEET_URL_INVALID:
    "Datasheet URL must be a valid URL.",
  ID_REQUIRED: "Product ID is required.",
} as const;

const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const optionalUrlField = z
  .union([
    z.string().url(),
    z.literal(""),
    z.null(),
    z.undefined(),
  ])
  .transform((value) => {
    if (!value) {
      return undefined;
    }

    return value;
  });

export const createProductSchema = z.object({
  categoryId: z
    .string()
    .trim()
    .min(1, VALIDATION_MESSAGES.CATEGORY_ID_REQUIRED),

  name: z
    .string()
    .trim()
    .min(3, VALIDATION_MESSAGES.NAME_MIN)
    .max(255, VALIDATION_MESSAGES.NAME_MAX),

  slug: z
    .string()
    .trim()
    .min(3, VALIDATION_MESSAGES.SLUG_MIN)
    .max(255, VALIDATION_MESSAGES.SLUG_MAX)
    .regex(
      slugRegex,
      VALIDATION_MESSAGES.SLUG_INVALID
    ),

  shortDescription: z
    .string()
    .trim()
    .max(
      500,
      VALIDATION_MESSAGES.SHORT_DESCRIPTION_MAX
    )
    .optional()
    .or(z.literal("")),

  description: z
    .string()
    .trim()
    .optional()
    .or(z.literal("")),

  specifications: z.unknown().optional(),

  features: z.unknown().optional(),

  applications: z.unknown().optional(),

  brochureUrl: optionalUrlField.refine(
    (value) =>
      value === undefined ||
      z.string().url().safeParse(value).success,
    {
      message:
        VALIDATION_MESSAGES.BROCHURE_URL_INVALID,
    }
  ),

  datasheetUrl: optionalUrlField.refine(
    (value) =>
      value === undefined ||
      z.string().url().safeParse(value).success,
    {
      message:
        VALIDATION_MESSAGES.DATASHEET_URL_INVALID,
    }
  ),

  featured: z.boolean().default(false),

  isActive: z.boolean().default(true),
});

export const updateProductSchema =
  createProductSchema.extend({
    id: z
      .string()
      .trim()
      .min(1, VALIDATION_MESSAGES.ID_REQUIRED),
  });

export type CreateProductInput = z.infer<
  typeof createProductSchema
>;

export type UpdateProductInput = z.infer<
  typeof updateProductSchema
>;