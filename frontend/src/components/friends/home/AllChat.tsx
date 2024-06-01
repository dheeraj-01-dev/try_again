import Image from 'next/image'
import React from 'react'
import styles from './styles/allChat.module.css'
import Link from 'next/link'

const AllChat = () => {
  return (
    <div className={styles.allChat}>
      <div className={styles.newConversationTemplate}>Build Some Big !</div>
      <div className={styles.newChatBox}>
        <Link href="/friends/new-conversation">
          <Image height={60} width={60} alt='' src="/icons/new-chat.png" />
        </Link>
      </div>
    </div>
  )
}

export default AllChat
