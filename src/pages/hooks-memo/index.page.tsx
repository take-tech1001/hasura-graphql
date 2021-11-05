import type { VFC } from 'react'

import { Layout } from '../layout'
import { CreateUser } from '../../components/CreateUser'

const HooksMemo: VFC = () => {
  return (
    <Layout title="Hooks memo">
      <CreateUser />
    </Layout>
  )
}
export default HooksMemo
