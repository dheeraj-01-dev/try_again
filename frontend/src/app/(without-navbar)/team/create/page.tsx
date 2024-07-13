import React from 'react'
import styles from './page.module.css'
import Header from '@/components/team/create/Header'
import SelectMember from '@/components/team/create/SelectMember'
import { apiType } from '@/api/types/apiTypes'
import { getallFriends } from '@/api/friends/get-allFriends'
import { cookies } from 'next/headers'

const page = async () => {

  const cookieStore = cookies();
  const i_state = cookieStore.get("i_state")?.value;


  const json :apiType= await getallFriends({ auth :i_state });
  const members :Array<any>= json.data.friend_details; 

  return (
    <div className={styles.teamBox}>
      <Header />
      <SelectMember members={members} />
    </div>
  )
}

export default page
