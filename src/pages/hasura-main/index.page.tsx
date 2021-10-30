import type { VFC } from 'react'
import type { GetUsersQuery } from '../../types/generated/graphql'

import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { GET_USERS } from '../../queries/queries'
import { Layout } from '../layout/Layout'

const FetchMain: VFC = () => {
  const { data, error } = useQuery<GetUsersQuery>(GET_USERS, {
    // 毎回graphqlサーバーから最新の状態のデータを取得する
    // fetchPolicy: 'network-only',
    // graphqlサーバーから最新の状態のデータを取得している間キャッシュのデータを表示する
    fetchPolicy: 'cache-and-network',
    // 毎回キャッシュを見に行く
    // fetchPolicy: 'cache-first',
    // 毎回graphqlサーバーを見に行き、キャッシュを生成しない
    // fetchPolicy: 'no-cache',
  })
  if (error) {
    return (
      <Layout title="Hasura FetchPolicy">
        <p>Error: {error.message}</p>
      </Layout>
    )
  }
  if (!data) {
    return (
      <Layout title="Hasura FetchPolicy">
        <p>loading...</p>
      </Layout>
    )
  }
  return (
    <Layout title="Hasura FetchPolicy">
      <p className="mb-6 font-bold">Hasura main page</p>

      {data?.users.map((user) => {
        return (
          <p className="my-1" key={user.id}>
            {user.name}
          </p>
        )
      })}
      <Link href="/hasura-sub">
        <a className="mt-6">Next</a>
      </Link>
    </Layout>
  )
}

export default FetchMain
