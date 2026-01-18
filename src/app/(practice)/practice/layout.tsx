
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function PracticeLayout(
  {children,marketingSlot,salesSlot}:
  {children:React.ReactNode;
    marketingSlot :React.ReactNode;
    salesSlot :React.ReactNode
  }
) {
  return (
    <div className='mt-5 space-x-3'>
       <Button><Link href='/practice/development'>Development</Link></Button> 
       <Button><Link href='/practice/marketing'>Marketting</Link></Button> 
       <Button><Link href='/practice/marketing/setting'>Setting</Link></Button> 
       <Button><Link href='/practice/sales'>Sales</Link></Button> 


       <div className='flex'>

        {
          marketingSlot
        }
        {
          salesSlot
        }
       </div>
    {children}
    </div>
  )
}
