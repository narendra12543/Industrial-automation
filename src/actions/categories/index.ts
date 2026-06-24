"use server";

import { revalidatePath } from "next/cache";

import { prisma } from "@/lib/prisma";
import {
  createCategorySchema,
  updateCategorySchema,
  type CreateCategoryInput,
  type UpdateCategoryInput,
} from "@/validations/category";

type ActionResponse = {
  success: boolean;
  message: string;
};

export async function createCategory(
  input: CreateCategoryInput
): Promise<ActionResponse> {
  try {
    const validatedData =
      createCategorySchema.safeParse(input);

    if (!validatedData.success) {
      return {
        success: false,
        message:
          validatedData.error.issues[0]?.message ??
          "Invalid category data.",
      };
    }

    const { name, slug, description, isActive } =
      validatedData.data;

    const existingSlug =
      await prisma.category.findUnique({
        where: {
          slug,
        },
      });

    if (existingSlug) {
      return {
        success: false,
        message: "Category slug already exists.",
      };
    }

    const existingName =
      await prisma.category.findFirst({
        where: {
          name,
        },
      });

    if (existingName) {
      return {
        success: false,
        message: "Category name already exists.",
      };
    }

    await prisma.category.create({
      data: {
        name,
        slug,
        description:
          description?.trim() || null,
        isActive,
      },
    });

    revalidatePath("/admin/categories");

    return {
      success: true,
      message: "Category created successfully.",
    };
  } catch {
    return {
      success: false,
      message:
        "Failed to create category. Please try again.",
    };
  }
}

export async function updateCategory(
  input: UpdateCategoryInput
): Promise<ActionResponse> {
  try {
    const validatedData =
      updateCategorySchema.safeParse(input);

    if (!validatedData.success) {
      return {
        success: false,
        message:
          validatedData.error.issues[0]?.message ??
          "Invalid category data.",
      };
    }

    const {
      id,
      name,
      slug,
      description,
      isActive,
    } = validatedData.data;

    const category =
      await prisma.category.findUnique({
        where: {
          id,
        },
      });

    if (!category) {
      return {
        success: false,
        message: "Category not found.",
      };
    }

    const duplicateSlug =
      await prisma.category.findFirst({
        where: {
          slug,
          NOT: {
            id,
          },
        },
      });

    if (duplicateSlug) {
      return {
        success: false,
        message: "Category slug already exists.",
      };
    }

    const duplicateName =
      await prisma.category.findFirst({
        where: {
          name,
          NOT: {
            id,
          },
        },
      });

    if (duplicateName) {
      return {
        success: false,
        message: "Category name already exists.",
      };
    }

    await prisma.category.update({
      where: {
        id,
      },
      data: {
        name,
        slug,
        description:
          description?.trim() || null,
        isActive,
      },
    });

    revalidatePath("/admin/categories");

    return {
      success: true,
      message: "Category updated successfully.",
    };
  } catch {
    return {
      success: false,
      message:
        "Failed to update category. Please try again.",
    };
  }
}

export async function deleteCategory(
  id: string
): Promise<ActionResponse> {
  try {
    if (!id) {
      return {
        success: false,
        message: "Category ID is required.",
      };
    }

    const category =
      await prisma.category.findUnique({
        where: {
          id,
        },
        include: {
          _count: {
            select: {
              products: true,
            },
          },
        },
      });

    if (!category) {
      return {
        success: false,
        message: "Category not found.",
      };
    }

    if (category._count.products > 0) {
      return {
        success: false,
        message:
          "Cannot delete category because products are linked to it.",
      };
    }

    await prisma.category.delete({
      where: {
        id,
      },
    });

    revalidatePath("/admin/categories");

    return {
      success: true,
      message: "Category deleted successfully.",
    };
  } catch {
    return {
      success: false,
      message:
        "Failed to delete category. Please try again.",
    };
  }
}

export async function getCategories() {
  try {
    return await prisma.category.findMany({
      include: {
        _count: {
          select: {
            products: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  } catch {
    return [];
  }
}

export type CategoryWithCount = Awaited<
  ReturnType<typeof getCategories>
>[number];