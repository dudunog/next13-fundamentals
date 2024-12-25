import { Suspense } from 'react'

import { GithubProfile } from '@/components/github-profile'
import { LongWaitComponent } from '@/components/long-wait-component'

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return (
    <div>
      <h1>Home</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure optio
        quasi nam labore officiis vitae, quaerat impedit id fuga porro dicta
        velit cum, voluptatibus nesciunt? Quam veritatis modi officiis quis.
      </p>

      <Suspense fallback={<p>Carregando LongWaitComponent</p>}>
        <LongWaitComponent />
      </Suspense>
      <Suspense fallback={<p>Carregando GithubProfile</p>}>
        <GithubProfile />
      </Suspense>
    </div>
  )
}
