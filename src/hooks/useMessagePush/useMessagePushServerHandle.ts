import { ConversationServerKey, ConversationRes } from '@hooks/useAxios'
import { UseMessagePushInput } from './useMessagePushInput'

export type UseMessagePushServerHandleArgs = {
   input: UseMessagePushInput
   cb: {
      onSending?: (reqMessage: string) => void
      onFinally?: () => void
      onSuccess?: (resMessage: string) => void
      onError?: () => void
   }
}

type UseMessagePushServerHandle = {
   sending: () => void
   error: () => void
   finally: () => void
   success: (res: ConversationRes<ConversationServerKey>) => void
}

const useMessagePushServerHandle = ({
   input,
   cb,
}: UseMessagePushServerHandleArgs): UseMessagePushServerHandle =>
   Object.freeze({
      sending: () => {
         input.setDisabled(true)
         if (cb.onSending) {
            cb.onSending(input.message)
         }
      },
      error: () => {
         if (cb.onError) {
            cb.onError()
         }
      },
      finally: () => {
         input.setDisabled(false)
         input.setMessage('')
         if (cb.onFinally) {
            cb.onFinally()
         }
      },
      success: (res) => {
         if (cb.onSuccess) {
            cb.onSuccess(res.message)
         }
      },
   })

export default useMessagePushServerHandle
