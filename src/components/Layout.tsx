import * as React from 'react'
import LayoutHeader from './LayoutHeader'
import LaytoutContent from './LayoutContent'

type LaoutProps = {
   children: React.ReactNode
}

export default function Layout({ children }: LaoutProps) {
   return (
      <div className="flex flex-col h-screen">
         <LayoutHeader />
         <LaytoutContent>{children}</LaytoutContent>
      </div>
   )
}
