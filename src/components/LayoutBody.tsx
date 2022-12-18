import * as React from 'react'

type LayoutBodyProps = {
   children: React.ReactNode
}

export default function LayoutBody({ children }: LayoutBodyProps) {
   return <div className="grow">{children}</div>
}
