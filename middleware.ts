import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const AUTH_USER = process.env.BASIC_USER!;
const AUTH_PASS = process.env.BASIC_PASS!;
const AUTH_HEADER =
  "Basic " + Buffer.from(`${AUTH_USER}:${AUTH_PASS}`).toString("base64");

export function middleware(req: NextRequest) {
  if (
    req.nextUrl.pathname.startsWith("/_next") ||
    req.nextUrl.pathname.startsWith("/favicon.ico")
  ) {
    return NextResponse.next();
  }

  const auth = req.headers.get("authorization");
  if (auth === AUTH_HEADER) {
    return NextResponse.next();
  }

  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Secure Area"'
    }
  });
}

export const config = {
  matcher: "/:path*"
};
