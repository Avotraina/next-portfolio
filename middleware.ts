// middleware.ts
import { createI18nMiddleware } from 'next-international/middleware'
import { NextRequest, NextResponse } from 'next/server'
 
const I18nMiddleware = createI18nMiddleware({
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  // urlMappingStrategy: 'redirect'
  // urlMappingStrategy: 'rewriteDefault'
})
 
export function middleware(request: NextRequest) {

  // const { pathname, searchParams } = request.nextUrl

  // if (request.nextUrl.searchParams.has('_rsc')) {
  //   return NextResponse.next(); // ne redirige pas, laisse passer
  // }

  // const url = request.nextUrl

  // if (url.searchParams.has('_rsc') || url.pathname.startsWith('/_next')) {
  //   return NextResponse.next()
  // }

  // if (
  //   pathname.startsWith('/api') ||
  //   pathname.startsWith('/_next') ||
  //   pathname.includes('.') || // static assets
  //   searchParams.has('_rsc') // prevent RSC redirection issues
  // ) {
  //   return
  // }

  // return I18nMiddleware(request)
}
 
export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)']
  // matcher: [
  //   '/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt|.*_rsc=).*)'
  // ]

  // matcher: ['/((?!_next).*)'],
}