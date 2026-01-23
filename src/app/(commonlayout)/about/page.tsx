
'use client'

import { getBlogs } from '@/actions/blog.action'
import React, { useEffect, useState } from 'react'
// export const dynamic = 'force-dynamic'
export default   function AboutPage() {
  // await new Promise((resolve)=>{
  //   setTimeout(resolve,2000)
  // })
  // throw new Error('Error~!!')

  const [data,setData]= useState()
console.log(data);

  useEffect(()=>{
  ( async ()=>{
    const {data}=await getBlogs()
    setData(data)
  })()
  },[])

  return (
    <div>
      ABout me
    </div>
  )
}
