import * as React from 'react'
import { UseAxios } from '@hooks/useAxios'
import { UseMessagePushInput } from './useMessagePushInput'

export type UseMessagePushInputHandleArgs = {
   input: UseMessagePushInput
   server: UseAxios
}

export type UseMessagePushInputHandle = {
   change: (event: React.ChangeEvent<HTMLInputElement>) => void
   keyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

const useMessagePushInputHandle = ({
   input,
   server,
}: UseMessagePushInputHandleArgs): UseMessagePushInputHandle => {
   const { setMessage } = input

   return Object.freeze({
      change: React.useCallback(
         (event: React.ChangeEvent<HTMLInputElement>) => {
            setMessage(event.currentTarget.value)
         },
         [setMessage]
      ),
      keyDown: React.useCallback(
         (event: React.KeyboardEvent<HTMLInputElement>) => {
            if (
               event.key === 'Enter' &&
               event.nativeEvent.isComposing === false
            ) {
               event.preventDefault()
               server.post()
            }
         },
         [server]
      ),
   })
}

export default useMessagePushInputHandle
