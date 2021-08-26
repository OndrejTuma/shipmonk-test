import Head from 'next/head'
import type { NextPage } from 'next'

import PackingContainer from '@features/Packing/containers/PackingContainer'
import Wrapper from '@components/Wrapper'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ShipMonk packing problem</title>
      </Head>

      <Wrapper>
        <PackingContainer />
      </Wrapper>
    </div>
  )
}

export default Home
