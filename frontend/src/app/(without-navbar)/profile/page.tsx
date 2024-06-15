import React from 'react'
import styles from './page.module.css'
import Header from '@/components/profile/Header'
import UserProfile from '@/components/profile/UserProfile'
import MatchQuery from '@/components/profile/MatchQuery'
import Balance from '@/components/profile/Balance'
import PersnolInfo from '@/components/profile/PersnolInfo'

const page = () => {
  return (
    <div className={styles.profile}>
      <Header userName='dheeraj_91'/>
      <UserProfile style={{marginTop: 20}} name='dheeraj' uid={2206129546} />
      <Balance style={{marginTop: 15}} />
      <MatchQuery style={{marginTop: 15}} />
      <PersnolInfo />
    </div>
  )
}

export default page
