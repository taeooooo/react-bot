import * as React from 'react'
import clsx from 'clsx'
import { format } from 'date-fns'

export type MessageListItemTimeStampProps = {
   children: Date
   align: 'left' | 'right'
}

export default function MessageListItemTimeStamp({
   children,
   align,
}: MessageListItemTimeStampProps) {
   const classNames = clsx(
      [{ 'text-right': align === 'right' }, { 'text-left': align === 'left' }],
      'text-xs',
      'text-slate-400',
      'mt-2'
   )
   return (
      <div className={classNames}>{format(children, 'Y-MM-dd HH:mm:ss')}</div>
   )
}
