"use server"
import LoginRequired from '@/components/auth/login/LoginRequired'
import Completed from '@/components/contest/Completed'
import ContestHeader from '@/components/contest/ContestHeader'
import Upcoming from '@/components/contest/Upcoming'
import React from 'react'

const page = () => {
  return (
    <div>
      <ContestHeader upcomingBattle={Upcoming()} completedBattle={Completed()}/>
      <LoginRequired>
        <div></div>
      </LoginRequired>
    </div>
  )
}

export default page
