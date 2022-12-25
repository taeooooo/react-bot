import * as React from 'react'

export type Messages = {
   talker: 'bot' | 'user'
   message: string
   timestamp: Date
   isPending: boolean
}

export type UseMessageList = {
   data: Messages[]
   append: (talker: Messages['talker'], message: Messages['message']) => void
   appendPending: () => void
   removeAllPending: () => void
}

const useMessageList = (): UseMessageList => {
   const [messages, setMessages] = React.useState<Messages[]>([])

   return Object.freeze({
      data: messages,
      append: (talker, message) => {
         setMessages((prevStae) => [
            ...prevStae,
            { talker, message, isPending: false, timestamp: new Date() },
         ])
      },
      appendPending: () => {
         setMessages((prevStae) => [
            ...prevStae,
            {
               talker: 'bot',
               message: '...',
               isPending: true,
               timestamp: new Date(),
            },
         ])
      },
      removeAllPending: () => {
         setMessages((prevStae) => [...prevStae.filter((e) => !e.isPending)])
      },
   })
}

export default useMessageList
