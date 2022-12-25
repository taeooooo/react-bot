import useAxios from '@hooks/useAxios'
import useMessagePushInput, { UseMessagePushInput } from './useMessagePushInput'
import useMessagePushInputHandle, {
   UseMessagePushInputHandle,
} from './useMessagePushInputHandle'
import useMessagePushServerHandle from './useMessagePushServerHandle'

type UseMssagePushState = {
   input: {
      state: UseMessagePushInput
      handle: UseMessagePushInputHandle
   }
}

type UseMemberPushArgs = {
   onSending?: (reqMessage: string) => void
   onFinally?: () => void
   onSuccess?: (resMessage: string) => void
   onError?: () => void
}

const useMessagePush = ({ ...cb }: UseMemberPushArgs): UseMssagePushState => {
   const input = useMessagePushInput()

   const serverHandle = useMessagePushServerHandle({ input, cb })

   const server = useAxios(
      '/api/conversation',
      { message: input.message },
      {
         onSending: serverHandle.sending,
         onSuccess: serverHandle.success,
         onError: serverHandle.error,
         onFinally: serverHandle.finally,
      }
   )

   return Object.freeze({
      input: Object.freeze({
         state: input,
         handle: useMessagePushInputHandle({ input, server }),
      }),
   })
}

export default useMessagePush
