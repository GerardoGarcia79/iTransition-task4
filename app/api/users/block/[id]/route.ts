import { prisma } from "@/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  props: { params: Promise<{ id: string }> }
) {
  const params = await props.params;
  // const session = await getServerSession(authOptions);
  // if (!session) return NextResponse.json({}, { status: 401 });

  // const body = await request.json();

  const user = await prisma.user.findUnique({
    where: { id: params.id },
  });

  if (!user)
    return NextResponse.json({ error: "Invalid user" }, { status: 404 });

  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: {
      status: "blocked",
    },
  });

  return NextResponse.json(updatedUser);
}
