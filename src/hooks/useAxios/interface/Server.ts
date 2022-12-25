import {
   ConversationServerKey,
   ConversationReq,
   ConversationRes,
} from './Conversation'

export type ServerKey = ConversationServerKey
export type ServerReq<T> = ConversationReq<T>
export type ServerRes<T> = ConversationRes<T>
