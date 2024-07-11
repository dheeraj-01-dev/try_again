import React from 'react'
import styles from './page.module.css'
import Header from '@/components/chat/Header'
import ChatBox from '@/components/chat/ChatBox'

const page = () => {
  return (
    <div className={styles.room}>
      <ChatBox />
    </div>
  )
}

export default page
