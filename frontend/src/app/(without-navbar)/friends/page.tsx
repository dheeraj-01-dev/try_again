import React from 'react'
import styles from './page.module.css'
import SearchBox from '@/components/friends/new-conversation/SearchBox'
import AllFriends from '@/components/friends/new-conversation/AllFriends'
import { cookies } from 'next/headers'
import { getallFriends } from '@/api/friends/get-allFriends'
import { apiType } from '@/api/types/apiTypes'

const page = async () => {
  const cookieStore = cookies();
  const i_state = cookieStore.get("i_state")?.value;
  
  const json :apiType= await getallFriends({ auth :i_state });
  const friends :Array<any>= json.data.friend_details; 

  return (
    <div className={styles.newConversation}>
      <SearchBox />
      <AllFriends friends={friends} />
    </div>
  )
}

export default page
