import { NextRequest, NextResponse } from "next/server";
import Cookies from "js-cookie";

export async function middleware(request: NextRequest) {
  const nextCookies = request.cookies.get("edad");
  // console.log(nextCookies)

  const requestHeader = new Headers(request.headers);
  requestHeader.set("SpicyX", "Welcome");

  const response = NextResponse.next({
    request: {
      headers: requestHeader,
    },
  });

  if (request.nextUrl.pathname.endsWith("/video")) {
    return NextResponse.redirect(new URL("/inicio", request.url));
  }
  // if (request.nextUrl.pathname.includes("/actores/")) {
  //   return NextResponse.redirect(new URL("/actores", request.url));
  // }

  if (request.nextUrl.pathname.endsWith("/") && nextCookies?.value === "true") {
    return NextResponse.redirect(new URL("/inicio", request.url));
  }
  if (
    (request.nextUrl.pathname.includes("/categorias") ||
      request.nextUrl.pathname.includes("/inicio") ||
      request.nextUrl.pathname.includes("/pornstars")) &&
    nextCookies?.value !== "true"
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return response;
}
