// middleware.js
import { NextResponse } from 'next/server';

export const config = {
  matcher: '/:path*',
};

export function middleware(request) {
  console.log("Middleware triggered for:", request.nextUrl.pathname);
  
  const userAgent = request.headers.get('user-agent') || '';
  const isMobile = /mobile|android|iphone|ipad/i.test(userAgent);
  const url = request.nextUrl.clone();

  if (url.pathname === '/') {
    url.pathname = isMobile ? '/mobile' : '/desktop';
    console.log(`Rewriting from "/" to "${url.pathname}"`);
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
