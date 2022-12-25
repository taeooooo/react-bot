import * as React from 'react'
import { MessagePushProps } from '@components/MessagePush'
import { UseMessageList } from './useMessageList'

export type UseConversationHandle = {
   messagePushHandle: {
      sending: MessagePushProps['onSending']
      error: MessagePushProps['onError']
      success: MessagePushProps['onSuccess']
      finally: MessagePushProps['onFinally']
   }
}

const useConversationHandle = (
   messageList: UseMessageList
): UseConversationHandle =>
   Object.freeze({
      messagePushHandle: Object.freeze({
         sending: React.useCallback(
            (message: string) => {
               messageList.append('user', message)
               messageList.appendPending()
            },
            [messageList]
         ),
         error: React.useCallback(
            () => messageList.append('bot', '서버에러가 발생했습니다.'),
            [messageList]
         ),
         success: React.useCallback(
            (res: string) => {
               messageList.append('bot', res)
            },
            [messageList]
         ),
         finally: React.useCallback(() => {
            messageList.removeAllPending()
         }, [messageList]),
      }),
   })

export default useConversationHandle
