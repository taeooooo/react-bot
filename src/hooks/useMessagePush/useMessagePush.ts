import useAxios from '@hooks/useAxios'
import useMessagePushInput, { UseMessagePushInput } from './useMessagePushInput'
import useMessagePushInputHandle, {
   UseMessagePushInputHandle,
} from './useMessagePushInputHandle'
import useMessagePushServerHandle, {
   UseMessagePushServerHandleArgs,
} from './useMessagePushServerHandle'

type UseMssagePushState = {
   input: {
      state: UseMessagePushInput
      handle: UseMessagePushInputHandle
   }
}

type UseMemberPushArgs = UseMessagePushServerHandleArgs['cb']

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
