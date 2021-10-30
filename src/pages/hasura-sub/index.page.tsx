import type { VFC } from 'react'
import type { GetUsersQuery } from '../../types/generated/graphql'

import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { GET_USERS_LOCAL, GET_USERS } from '../../queries/queries'
import { Layout } from '../layout/Layout'

const FetchSub: VFC = () => {
  const { data, error } = useQuery<GetUsersQuery>(GET_USERS_LOCAL)
  return (
    <Layout title="Hasura FetchPolicy read cache">
      <p className="mb-6 font-bold">Direct read out from cache</p>
      {data?.users.map((user) => {
        return (
          <p className="my-1" key={user.id}>
            {user.name}
          </p>
        )
      })}
      <Link href="/hasura-main">
        <a className="mt-6">Back</a>
      </Link>
    </Layout>
  )
}

export default FetchSub
