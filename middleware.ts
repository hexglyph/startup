import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const COUNTRY_COOKIE = "hexglyph-country"
const COUNTRY_HEADERS = ["x-vercel-ip-country", "cf-ipcountry", "x-country-code"]

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  const country = COUNTRY_HEADERS.map((header) => request.headers.get(header)).find(Boolean)

  if (country) {
    response.cookies.set(COUNTRY_COOKIE, country.toUpperCase(), {
      maxAge: 60 * 60 * 24,
      path: "/",
      sameSite: "lax",
    })
  }

  return response
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
}
