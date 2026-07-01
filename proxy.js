import { NextResponse } from 'next/server';

const MOBILE_UA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

export function proxy(request) {
  const ua = request.headers.get('user-agent') ?? '';

  if (MOBILE_UA.test(ua)) {
    return NextResponse.redirect(new URL('/m', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/',
};
