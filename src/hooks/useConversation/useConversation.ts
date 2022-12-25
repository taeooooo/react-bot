import * as React from 'react'
import useMessageList, { Messages, UseMessageList } from './useMessageList'
import useConversationHandle, {
   UseConversationHandle,
} from './useConversationHandle'

type UseConversation = {
   messageList: UseMessageList
   messagePushHandle: UseConversationHandle['messagePushHandle']
}

const useConversation = (data: Messages): UseConversation => {
   const messageList = useMessageList()
   const { messagePushHandle } = useConversationHandle(messageList)

   React.useEffect(() => {
      messageList.append(data.talker, data.message)
   }, [])

   return Object.freeze({
      messageList,
      messagePushHandle,
   })
}

export default useConversation
