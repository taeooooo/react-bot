import * as React from 'react'
import MessageBlock from './MessageListItemBlock'
import MessageBubble from './MessageListItemBubble'
import MessageTimestamp from './MessageListItemTimeStamp'

export type MessageListItemProps = {
   talker: 'bot' | 'user'
   message: string
   timestamp: Date
}

export default function MessageListItem({
   talker,
   message,
   timestamp,
}: MessageListItemProps) {
   if (talker === 'user') {
      return (
         <MessageBlock align="start">
            <MessageBubble>{message}</MessageBubble>
            <MessageTimestamp align="left">{timestamp}</MessageTimestamp>
         </MessageBlock>
      )
   }

   return (
      <MessageBlock align="end">
         <MessageBubble>{message}</MessageBubble>
         <MessageTimestamp align="right">{timestamp}</MessageTimestamp>
      </MessageBlock>
   )
}
