import * as React from 'react'
import axios from 'axios'
import { ServerKey, ServerReq, ServerRes } from './interface/Server'

export type UseAxios = {
   post: () => void
}

const useAxios = <T extends ServerKey>(
   serverKey: T,
   payload?: ServerReq<T>,
   options: {
      onSending?: () => void
      onSuccess?: (res: ServerRes<T>) => void
      onError?: (err: any) => void
      onFinally?: () => void
   } = {
      onSending: () => {},
      onSuccess: () => {},
      onError: () => {},
      onFinally: () => {},
   }
): UseAxios => {
   const [isSending, setIsSending] = React.useState(false)
   const { onSending, onSuccess, onError, onFinally } = options

   React.useEffect(() => {
      if (isSending && onSending) {
         onSending()
      }
   }, [isSending])

   return Object.freeze({
      post: React.useCallback(() => {
         setIsSending(true)
         axios
            .post<ServerRes<T>>(serverKey, payload)
            .then((res) => {
               if (onSuccess) {
                  onSuccess(res.data)
               }
            })
            .catch((err) => {
               if (onError) {
                  onError(err)
               }
            })
            .finally(() => {
               setIsSending(false)
               if (onFinally) {
                  onFinally()
               }
            })
      }, [serverKey, payload]),
   })
}

export default useAxios
