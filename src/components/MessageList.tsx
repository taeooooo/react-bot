import * as React from 'react'
import Message, { MessageListItemProps } from './MessageListItem'

type MessageListProps = {
   messages: MessageListItemProps[]
}

export default function MessageList({ messages }: MessageListProps) {
   if (!messages) {
      return null
   }

   return (
      <ul>
         {messages.map((e) => (
            <li key={`${e.talker}-${e.timestamp.valueOf()}`}>
               <Message
                  talker={e.talker}
                  message={e.message}
                  timestamp={e.timestamp}
               />
            </li>
         ))}
      </ul>
   )
}
