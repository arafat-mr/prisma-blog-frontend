import { Button } from '@/components/ui/button'
import Link from 'next/link'


export default function AnalyticsLayout({children,}:{children:React.ReactNode}) {
  return (
    <div >
      <div  className='space-x-2'>
        <Button > <Link href='/dashboard/analytics/weekly'>Weekly</Link></Button> 
        <Button ><Link href='/dashboard/analytics/monthly'>Monthly</Link></Button> 
      </div>
      {children}
    </div>
  )
}
