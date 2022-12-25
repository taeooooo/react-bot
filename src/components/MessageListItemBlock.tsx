import * as React from 'react'
import clsx from 'clsx'

export type MessageListItemBlockProps = {
   children: React.ReactNode
   align: 'start' | 'end'
}

export default function MessageListItemBlock({
   children,
   align,
}: MessageListItemBlockProps) {
   const classNames = clsx(
      [{ 'items-start': align === 'start' }, { 'items-end': align === 'end' }],
      'flex',
      'flex-col',
      'm-6'
   )
   return <div className={classNames}>{children}</div>
}
