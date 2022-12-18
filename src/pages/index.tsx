import * as React from 'react'
import Layout from '@components/Layout'
import LayoutHeader from '@components/LayoutHeader'
import LayoutBody from '@components/LayoutBody'
import LayoutFooter from '@components/LayoutFooter'

export default function Home() {
   return (
      <Layout>
         <LayoutHeader>1</LayoutHeader>
         <LayoutBody>2</LayoutBody>
         <LayoutFooter>3</LayoutFooter>
      </Layout>
   )
}
