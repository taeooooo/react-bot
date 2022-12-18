import * as React from 'react'

type LayoutHeaderProps = {
   children: React.ReactNode
}

export default function LayoutHeader({ children }: LayoutHeaderProps) {
   return <div>{children}</div>
}
