
import { env } from "@/env";
import { cookies } from "next/headers";

// const AuthUrl=process.env.AUTH_URL
const AuthUrl=env.AUTH_URL


export const userService ={
    getSession : async function (){
        
  
   try {
    const cookieStore= await cookies()

   console.log(cookieStore.toString());
   
  const res = await fetch(`${AuthUrl}/get-session`,{
    headers :{
      Cookie:cookieStore.toString()
    },
    cache: "no-store"
  })

  const session = await res.json()
  if (session === null){
    return {data : null, error :{message :"No active session found"}}
  }
 return {data : session, error: null}
//   console.log(session);
   } catch (error) {
    console.error(error);
    return {data : null , error : {message :'Something went wrong'}}
   }
  
  
    }
}