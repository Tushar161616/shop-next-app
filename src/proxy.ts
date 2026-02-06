import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";


export async function proxy(req: NextRequest){
    const {pathname} = req.nextUrl;

     console.log("Proxy running:", req.nextUrl.pathname);

     if(pathname === "/"){

     
    let publicroutes = [
        "/signin",
        "/signup",
        "/api/auth",
        "_next",
       
    ]
    if(publicroutes.some((path)=>pathname.startsWith(path))){
        return NextResponse.next();

    }

    const token = await getToken({req,secret:"secret"})
        if(!token){
            const logurl = new URL("/signin",req.url)
            // console.log(logurl);

            console.log("No token");
    return NextResponse.redirect(new URL("/signin", req.url));
            // logurl.searchParams.set("callbackUrl",req.url)
            //    console.log(logurl);
            // return NextResponse.redirect(logurl)
        }
    }

    console.log("Token exist");
  return NextResponse.next();
    
}


export const config = {
    // matcher: ['/((?!api|_next/static|_next/image|favicon.ico|node_modules).*)']
    // matcher: ['/']
      matcher: ['/((?!api|_next|favicon.ico).*)'],


}