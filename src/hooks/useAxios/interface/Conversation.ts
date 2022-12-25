export type ConversationServerKey = '/api/conversation'

export type ConversationReq<T> = T extends ConversationServerKey
   ? {
        message: string
     }
   : never

export type ConversationRes<T> = T extends ConversationServerKey
   ? {
        message: string
     }
   : never
