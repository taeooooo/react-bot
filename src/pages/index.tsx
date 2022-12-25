import * as React from 'react'
import Conversation from '@components/Conversation'
import Head from 'next/head'

type HomeProps = {
   data: {
      startMessage: string
   }
}

export default function Home({ data }: HomeProps) {
   return (
      <>
         <Head>
            <title>React Bot</title>
            <meta
               name="viewport"
               content="initial-scale=1.0, width=device-width"
            />
         </Head>
         <Conversation
            data={{
               talker: 'bot',
               message: data.startMessage,
               timestamp: new Date(),
               isPending: false,
            }}
         />
      </>
   )
}

export async function getServerSideProps() {
   return {
      props: {
         data: {
            startMessage:
               '안녕하세요. 자바스크립트에 대해서 조금 대답할 수 있어요.',
         },
      },
   }
}
