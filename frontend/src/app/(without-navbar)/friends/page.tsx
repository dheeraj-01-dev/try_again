import React from 'react'
import styles from './page.module.css'
import SearchSection from '@/components/friends/home/SearchSection'
import AllChat from '@/components/friends/home/AllChat'
import LoginRequired from '@/components/auth/login/LoginRequired'

const page = () => {
  return (
    <div className={styles.page}>
      <SearchSection />
      <AllChat /> 
      <LoginRequired>
        <div>
        </div> 
      </LoginRequired>
    </div>
  )
}

export default page
