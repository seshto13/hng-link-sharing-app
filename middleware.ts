import { NextRequest, NextResponse } from "next/server";
import { getAuth } from "firebase/auth";
//import Cookies from "js-cookie";
//import { PROTECTED_PATHS, PUBLIC_PATHS } from "./app/config/route";

export function middleware(request: NextRequest) {
  const PROTECTED_PATHS = ["/", "/dashboard", "/profile"];
  const PUBLIC_PATHS = ["/login", "/register"];

  const loggedin: string =
    request.cookies.get(process.env.SESSION_NAME ?? "link-app-session")
      ?.value ?? "false";

  if (
    loggedin !== "true" &&
    PROTECTED_PATHS.includes(request.nextUrl.pathname)
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (loggedin === "true" && PUBLIC_PATHS.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/", "/login", "/register", "/profile"],
};
