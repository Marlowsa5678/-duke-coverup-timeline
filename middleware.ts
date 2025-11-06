import { NextResponse } from "next/server";

export function middleware(req) {
  const auth = req.headers.get("authorization");

  const USER = process.env.BASIC_USER;
  const PASS = process.env.BASIC_PASS;

  if (!auth) {
    return new NextResponse("Authentication required", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Secure Area"',
      },
    });
  }

  const [scheme, encoded] = auth.split(" ");

  if (!encoded) {
    return new NextResponse("Invalid authorization header", { status: 401 });
  }

  const decoded = Buffer.from(encoded, "base64").toString();
  const [user, pass] = decoded.split(":");

  if (user === USER && pass === PASS) {
    return NextResponse.next();
  }

  return new NextResponse("Invalid credentials", { status: 401 });
}

export const config = {
  matcher: "/:path*",
};
