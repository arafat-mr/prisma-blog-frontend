'use server'

import { blogServices } from "@/services/blog.service"


export const getBlogs = async ()=>{
    return await blogServices.getBlogPosts()
}