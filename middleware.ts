// middleware.ts
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // 👇 Public routes (not protected by auth)
  publicRoutes: [
    "/api(.*)",           // All API routes
    "/sign-in(.*)",       // Sign-in page
    "/sign-up(.*)",       // Sign-up page
    "/favicon.ico",       // Prevent favicon from error
  ],
});

export const config = {
  matcher: [
    "/((?!_next|.*\\..*).*)", // Match all pages, skip static files
  ],
};
