

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { env } from '@/env'
import { revalidateTag, updateTag } from 'next/cache'
import { cookies } from 'next/headers'

import React from 'react'
const API_URL= env.API_URL
export default function CreateBlogFormServer() {

    const createBlog = async (formData:FormData)=>{
        'use server'

        // console.log(formData.get('title'));
        const title= formData.get('title') as string
        const content= formData.get('content') as string
        const tags = formData.get('tags') as string
        const blogData={
            title,content,tags:tags.split(',').map(item=>item.trim()).filter(item=> item!== '')
        }
        // console.log(JSON.stringify(blogData));
        const cookieStore= await cookies()

        const res= await fetch(`${API_URL}/posts`,{
            method:'POST',
            headers:{
                'Content-type':'application/json',
                Cookie :cookieStore.toString()
            },
            body : JSON.stringify(blogData)
        })

        // console.log(res);

        if(res.ok){
            revalidateTag('Blog-Posts', 'max')
            // updateTag('Blog-Posts')
        }
        
        
    }
  return (
    <Card className='max-w-2xl mx-auto'>
        <CardHeader>
            <CardTitle>Create  blog</CardTitle>
            <CardDescription>You can write your blog here</CardDescription>
        </CardHeader>
        <CardContent>
        <form id='blog-form' action={createBlog}>
   <FieldGroup>
    <Field>
        <FieldLabel htmlFor='title'>Title</FieldLabel>
        <Input type='text' name='title' placeholder='Your title here' required/>
    </Field>
    <Field>
        <FieldLabel htmlFor='content'>Content</FieldLabel>
      
        <Textarea id='content' name='content' placeholder='Write your blog' required />
    </Field>
    <Field>
        <FieldLabel htmlFor='tags'>Tags (Comma separated )</FieldLabel>
        <Input type='text' name='tags' placeholder='Nextjs,React' required/>
    </Field>
   </FieldGroup>
        </form>
        </CardContent>
        <CardFooter>
            <Button  form='blog-form' type='submit' className='w-full'>Submit</Button>
        </CardFooter>
    </Card>
  )
}
