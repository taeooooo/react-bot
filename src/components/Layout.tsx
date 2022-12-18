import * as React from 'react'

type LaoutProps = {
   children: React.ReactNode
}

export default function Layout({ children }: LaoutProps) {
   return <div className="flex flex-col h-screen">{children}</div>
}
