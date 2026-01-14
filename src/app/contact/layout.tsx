import React from 'react'

export default function layout({children}:{children:React.ReactNode
}) {
  return (
    <div>

      <p>This is contact layout</p>
      {children}
    </div>
  )
}
