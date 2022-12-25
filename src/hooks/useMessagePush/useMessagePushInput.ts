import * as React from 'react'

export type UseMessagePushInput = {
   message: string
   setMessage: React.Dispatch<React.SetStateAction<string>>
   disabled: boolean
   setDisabled: React.Dispatch<React.SetStateAction<boolean>>
}

const useMessagePushInput = (): UseMessagePushInput => {
   const [message, setMessage] = React.useState('')
   const [disabled, setDisabled] = React.useState(false)

   return Object.freeze({
      message,
      setMessage,
      disabled,
      setDisabled,
   })
}

export default useMessagePushInput
