import { z } from "zod";

const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export const createCategorySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, {
      message: "Category name must be at least 2 characters.",
    })
    .max(150, {
      message: "Category name cannot exceed 150 characters.",
    }),

  slug: z
    .string()
    .trim()
    .min(2, {
      message: "Slug must be at least 2 characters.",
    })
    .max(180, {
      message: "Slug cannot exceed 180 characters.",
    })
    .regex(slugRegex, {
      message:
        "Slug must contain only lowercase letters, numbers, and hyphens.",
    }),

  description: z
    .string()
    .trim()
    .max(1000, {
      message: "Description cannot exceed 1000 characters.",
    })
    .optional()
    .or(z.literal("")),

  isActive: z.boolean().default(true),
});

export const updateCategorySchema = z.object({
  id: z
    .string()
    .min(1, {
      message: "Category ID is required.",
    }),

  name: z
    .string()
    .trim()
    .min(2, {
      message: "Category name must be at least 2 characters.",
    })
    .max(150, {
      message: "Category name cannot exceed 150 characters.",
    }),

  slug: z
    .string()
    .trim()
    .min(2, {
      message: "Slug must be at least 2 characters.",
    })
    .max(180, {
      message: "Slug cannot exceed 180 characters.",
    })
    .regex(slugRegex, {
      message:
        "Slug must contain only lowercase letters, numbers, and hyphens.",
    }),

  description: z
    .string()
    .trim()
    .max(1000, {
      message: "Description cannot exceed 1000 characters.",
    })
    .optional()
    .or(z.literal("")),

  isActive: z.boolean().default(true),
});

export type CreateCategoryInput = z.infer<
  typeof createCategorySchema
>;

export type UpdateCategoryInput = z.infer<
  typeof updateCategorySchema
>;

