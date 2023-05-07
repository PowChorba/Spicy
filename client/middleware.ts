import { NextRequest, NextResponse } from "next/server";


export function middleware(request:NextRequest){

    const requestHeader = new Headers(request.headers)
    requestHeader.set('Spicy-Tube', "Welcome")

    const response = NextResponse.next({
        request: {
            headers: requestHeader
        }
    })

    // if(useLocal[0] === true) {
    //     return NextResponse.redirect(new URL('/inicio', request.url))        
    // }

    return response
}