import * as React from 'react'

type LayoutFooterProps = {
   children: React.ReactNode
}

export default function LayoutFooter({ children }: LayoutFooterProps) {
   return <div>{children}</div>
}
