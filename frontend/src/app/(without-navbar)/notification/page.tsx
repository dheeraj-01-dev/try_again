import React from 'react'
import styles from './page.module.css'
import Header from '@/components/notification/Header'
import Notifications from '@/components/notification/Notifications'

const page = () => {
  return (
    <div className={styles.notification}>
      <Header />
      <Notifications />
    </div>
  )
}

export default page
