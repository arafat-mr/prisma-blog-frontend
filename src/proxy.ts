import { NextRequest, NextResponse } from "next/server";
import { userService } from "./services/user.service";
import { roles } from "./constants/roles";

export async function  proxy(request :NextRequest){

    // console.log('hellooo ',reqest.url);
    const pathName = request.nextUrl.pathname
   
    
    let isAuthenticated= false
    let isAdmin= false

    const {data} = await userService.getSession()
    console.log(data);

    if(data){
        isAuthenticated=true
        isAdmin=  data.user.role=== roles.admin
    }
     // no user 
    if(!isAuthenticated){
        return NextResponse.redirect(new URL('/login',request.url))
    }
   
    // if(!isAuthenticated && (pathName.startsWith('/dashboard') || pathName.startsWith('/admin-dash'))){
    //     return NextResponse.redirect(new URL('/login',request.url))
    // }
   
   //user
    // if(isAdmin && pathName.startsWith('/dashboard')){
    //     return NextResponse.redirect(new URL('/user-dash',request.url))
    // }
    // if(isAdmin && pathName.startsWith('/admin-dash')){
    //     return NextResponse.redirect(new URL('/user-dash',request.url))
    // }
    
    //admin
    // if(!isAdmin && pathName.startsWith('/dashboard')){
    //     return NextResponse.redirect(new URL('/admin-dash',request.url))
    // }
    // if(!isAdmin && pathName.startsWith('/user-dash')){
    //     return NextResponse.redirect(new URL('/admin-dash',request.url))
    // }
    
    return NextResponse.next()
}

export const config ={
    matcher :['/dashboard','/admin-dash','/admin-dash/:path','/user-dash']
}