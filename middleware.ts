import { NextRequest, NextResponse } from "next/server";
import { getAuth } from "firebase/auth";
//import Cookies from "js-cookie";
import { PROTECTED_PATHS, PUBLIC_PATHS } from "./app/config/route";

export function middleware(request: NextRequest) {
  // const auth = getAuth(firebaseApp);
  /*const loggedin: boolean =
    (request.cookies.get("SESSION")?.value as unknown as boolean) ??
    (false as boolean);

  if (!loggedin && PROTECTED_PATHS.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (loggedin && PUBLIC_PATHS.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }
*/
  // console.log("user");
}

/*export const config = {
  matcher: ["/", "/api/:path/alpha", `/api/:path/beta`],
};*/
