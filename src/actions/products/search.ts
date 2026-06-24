"use server";

import { prisma } from "@/lib/prisma";

export async function searchProducts(
  query: string
) {
  if (!query.trim()) {
    return [];
  }

  return prisma.product.findMany({
    where: {
      isActive: true,

      OR: [
        {
          name: {
            contains: query,
            mode: "insensitive",
          },
        },

        {
          description: {
            contains: query,
            mode: "insensitive",
          },
        },

        {
          category: {
            name: {
              contains: query,
              mode: "insensitive",
            },
          },
        },
      ],
    },

    include: {
      category: true,
    },

    take: 10,
  });
}