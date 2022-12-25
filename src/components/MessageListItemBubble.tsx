import * as React from 'react'
import clsx from 'clsx'

export type MessageListItemBubbleProps = {
   children: string
}

export default function MessageListItemBubble({
   children,
}: MessageListItemBubbleProps) {
   const classNames = clsx(
      'max-w-[70%]',
      'bg-slate-100',
      'rounded-md',
      'border',
      'border-slate-50',
      'px-4',
      'py-2',
      'text-sm',
      'text-stone-800'
   )

   return <div className={classNames}>{children}</div>
}
