import * as React from 'react'

type LaytoutContentProps = {
   children: React.ReactNode
}

export default function LayoutContent({ children }: LaytoutContentProps) {
   return <main className="grow overflow-hidden">{children}</main>
}
