import { NextResponse } from "next/server";

export default function middleware(req ) {
    let verify = req.cookies.get("loggedIn");
    let url = req.url;
    if(!verify && url.includes('/')){
        return NextResponse.redirect('/login')
    }
}

