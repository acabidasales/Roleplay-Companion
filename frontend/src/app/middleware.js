export function middleware(request) {
    const currentUser = request.cookies.get('jwt')?.value

    if (currentUser && !request.nextUrl.pathname.startsWith('/')) {
        return Response.redirect(new URL('/', request.url))
    }

    if (!currentUser && !request.nextUrl.pathname.startsWith('/login')) {
        return Response.redirect(new URL(process.env.NEXT_PUBLIC_BACKEND_API_URL+'/login', request.url))
    }
    }

    export const config = {
        matcher: ['/:path*', '/campañas/:path*'],
    };
