"use server";

import bcrypt from "bcryptjs";
import { Role } from "@prisma/client";

import { prisma } from "@/lib/prisma";
import {
  registerSchema,
  type RegisterInput,
} from "@/validations/auth";

export type RegisterActionResult =
  | {
      success: true;
      message: string;
      userId: string;
    }
  | {
      success: false;
      message: string;
      errors?: Record<string, string[]>;
    };

export async function registerUser(
  input: RegisterInput
): Promise<RegisterActionResult> {
  try {
    const validatedFields = registerSchema.safeParse(input);

    if (!validatedFields.success) {
      return {
        success: false,
        message: "Validation failed",
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    const { name, email, mobile, password } =
      validatedFields.data;

    const existingEmail = await prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
      },
    });

    if (existingEmail) {
      return {
        success: false,
        message: "Email already exists",
      };
    }

    const existingMobile = await prisma.user.findUnique({
      where: {
        mobile,
      },
      select: {
        id: true,
      },
    });

    if (existingMobile) {
      return {
        success: false,
        message: "Mobile number already exists",
      };
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        mobile,
        password: hashedPassword,
        role: Role.USER,
        isActive: true,
      },
      select: {
        id: true,
      },
    });

    return {
      success: true,
      message: "Account created successfully",
      userId: user.id,
    };
  } catch (error) {
    console.error("Registration Error:", error);

    return {
      success: false,
      message: "Failed to create account",
    };
  }
}