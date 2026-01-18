import { Navbar } from '@/layout/Navbar'
import React from 'react'

export default function CommonLayout({children}:{children : React.ReactNode}) {
  return (
    <div>
         <Navbar/>
      {children}
    </div>
  )
}
