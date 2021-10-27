import type { NextPage } from 'next'
import { Layout } from './layout/'

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <p className="text-4xl font-bold">Next.js + GraphQL</p>
    </Layout>
  )
}

export default Home
