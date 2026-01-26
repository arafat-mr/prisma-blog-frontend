import CreateBlogFormServer from '@/components/modules/user/create-blog/CreateBlogFormServer'
import { blogServices } from '@/services/blog.service'
import { BlogPost } from '@/types/blog.types'
import React from 'react'

export default async function CreateBlog() {

    const {data}= await blogServices.getBlogPosts()
    console.log('result',data.result.data);
    


  return (
    <div>
    <CreateBlogFormServer/>
    {data.result.data.map((item :BlogPost)=><p key={item.id}> {item.title}</p>)}
    </div>
  )
}
