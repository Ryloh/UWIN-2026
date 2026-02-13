import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const url = request.nextUrl
    const hostname = request.headers.get('host') ?? ''

    // Logic specific for 'deck' subdomain
    // Works for both 'deck.uwinlab.fr' and 'deck.localhost:3000'
    if (hostname.startsWith('deck.')) {
        // Rewrite root path to /pitch
        if (url.pathname === '/') {
            return NextResponse.rewrite(new URL('/pitch', request.url))
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}
