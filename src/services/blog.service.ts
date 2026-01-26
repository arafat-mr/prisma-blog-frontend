import { env } from "@/env"


const API_URL=env.API_URL

// No Dynamic no cache   -> ssg - static page
//  cache no-store --> ssr --> dynamic page
// next revalidate:10 --> isr --> mixed betwwen static and dynamic


interface getBlogParams {
   isFeatured? : boolean;
   search?:string
}
interface ServiceOptions {
   cache?:RequestCache;
   revalidate?:number
}
export const blogServices ={
   // ,{next : {revalidate : 10}}
    getBlogPosts : async function(params? :getBlogParams,options?:ServiceOptions){
 try {

   const url = new URL(`${API_URL}/posts`)

   // url.searchParams.append('Key','Value')

   // console.log(url.toString());
   // console.log(Object.entries(params));
   if(params){
      Object.entries(params).forEach(([Key,value])=>{
         if(value !== undefined && value !== null && value !== ''){
            url.searchParams.append(Key,value)
         }
      })
   }
   // console.log(url.toString());

   const config :RequestInit = {}

   if(options?.cache){
      config.cache=options.cache
   }
   if(options?.revalidate){
      config.next={revalidate :options.revalidate}
   }
   config.next = {...config,tags:['Blog-Posts']}

     const res = await fetch (url.toString(),config)
   //   const res = await fetch (url.toString(),{
   //    next : {
   //       tags:['Blog-Posts']
   //    }
   //   })

  const data= await res.json()

  return {data : data,error: null}
 } catch (error) {
    return {data :null, error :{message :"Something went wrong"}}
 }
    },
    getBlogById : async function(id: string){

      console.log(id);
      
try {
   const url= new URL(`${API_URL}/posts/${id}`)
   const res = await fetch(url.toString())
   
   const data= await res.json()
    console.log(data);
    
   return {data:data,error:null}
} catch (error) {
   return {data:null , error :{message:'Something went wrong'}}
}
    }
}