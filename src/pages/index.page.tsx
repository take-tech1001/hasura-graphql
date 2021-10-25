import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Layout } from './layout/'

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <p className="text-3xl font-bold">Next.js + GraphQL</p>
    </Layout>
  )
}

export default Home