import LoginRequired from '@/components/auth/login/LoginRequired'
import Contest from '@/components/contest/Contest'
import React from 'react'

const page = () => {
  return (
    <div>
      <LoginRequired>
        <Contest />
      </LoginRequired>
    </div>
  )
}

export default page
