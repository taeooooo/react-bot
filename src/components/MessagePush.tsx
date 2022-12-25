import * as React from 'react'
import Input from '@components/Input'
import useMessagePush from '@hooks/useMessagePush'

export type MessagePushProps = {
   onSending?: (reqMessage: string) => void
   onFinally?: () => void
   onSuccess?: (resMessage: string) => void
   onError?: () => void
}

export default function MessagePush({
   onSending,
   onFinally,
   onSuccess,
   onError,
}: MessagePushProps) {
   const { input } = useMessagePush({
      onSending,
      onFinally,
      onSuccess,
      onError,
   })

   const { state, handle } = input

   return (
      <div className="border-t border-solid">
         <Input
            style={{ border: 0 }}
            placeholder="메시지를 입력하세요."
            value={state.message}
            disabled={state.disabled}
            onChange={handle.change}
            onKeyDown={handle.keyDown}
         />
      </div>
   )
}
