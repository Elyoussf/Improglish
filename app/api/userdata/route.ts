/**
 * GET handler for /api/userdata route.
 * Authenticates the user with Clerk and retrieves the user data from the database.
 * Returns 401 if unauthenticated, 500 on errors, or 200 with user data.
 */
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const userData = await db.user.findUnique({
      where: {
        userId,
      },
    });
    console.log("user data",userData)
    return NextResponse.json(userData, { status: 200 });
  } catch (error) {
    console.log("[user]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
