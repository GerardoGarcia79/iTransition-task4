import { prisma } from "@/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";
import { hash } from "bcrypt";
import { formSchema } from "@/app/validationSchemas";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validation = formSchema.safeParse(body);

    if (!validation.success)
      return NextResponse.json(validation.error.format(), { status: 400 });

    const { email, name, password, position } = body;
    // Check if email already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      return NextResponse.json(
        { user: null, message: "User with this email already exists" },
        { status: 409 }
      );
    }

    // Hash password and create new user
    const hashedPassword = await hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        position,
      },
    });

    // If we decide to not show password in the response
    // const {password:newUserPassword, ...rest} = newUser;

    return NextResponse.json(
      { user: newUser, message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
}
