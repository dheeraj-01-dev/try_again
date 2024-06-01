import React from 'react'
import styles from './page.module.css'
import SearchBox from '@/components/friends/new-conversation/SearchBox'
import AllFriends from '@/components/friends/new-conversation/AllFriends'

const page = () => {
  return (
    <div className={styles.newConversation}>
      <SearchBox />
      <AllFriends />
    </div>
  )
}

export default page
