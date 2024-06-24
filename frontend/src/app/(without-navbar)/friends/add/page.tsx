import Add from '@/components/friends/add/Add'
import { cookies } from 'next/headers'
import React from 'react'

const page = () => {
  const cookieStore = cookies();
  const auth = cookieStore.get("i_state")?.value
  return (
    <div>
      <Add auth={auth} />
    </div>
  )
}

export default page
