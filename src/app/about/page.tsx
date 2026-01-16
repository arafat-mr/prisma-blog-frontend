import React from 'react'
export const dynamic = 'force-dynamic'
export default  async function AboutPage() {
  await new Promise((resolve)=>{
    setTimeout(resolve,2000)
  })
  // throw new Error('Error~!!')
  return (
    <div>
      ABout me
    </div>
  )
}
