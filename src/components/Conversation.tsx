import * as React from 'react'
import MessageList from '@components/MessageList'
import MessagePush from '@components/MessagePush'
import useConversation, { Messages } from '@hooks/useConversation'

type ConversationProps = {
   data: Messages
}

export default function Conversation({ data }: ConversationProps) {
   const { messageList, messagePushHandle } = useConversation(data)

   return (
      <div className="h-full flex flex-col">
         <section className="grow overflow-y-auto">
            <MessageList messages={messageList.data} />
         </section>
         <section>
            <MessagePush
               onSending={messagePushHandle.sending}
               onError={messagePushHandle.error}
               onFinally={messagePushHandle.finally}
               onSuccess={messagePushHandle.success}
            />
         </section>
      </div>
   )
}
