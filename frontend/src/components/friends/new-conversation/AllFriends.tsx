import Link from 'next/link'
import React from 'react'
import styles from './styles/allFriends.module.css'
import Image from 'next/image'
import { getallFriends } from '@/api/friends/get-allFriends'
import { cookies } from 'next/headers'
import { apiType } from '@/api/types/apiTypes'

const AllFriends = async () => {
  const cookieStore = cookies();
  const auth = cookieStore.get("i_state")?.value;
  const json :apiType= await getallFriends({ auth });

  const friends :Array<any>= json.data.friend_details;

  return (
    <div>
      <div className={styles.addFriendBox}>
        <Link href="/friends/add">
          {/* <button className={styles.addFriendsBtn}> + Add </button> */}
          <Image className={styles.addFriendImg} width={60} height={60} alt='' src="/icons/add.png" />
        </Link>
      </div>

      {friends.length<0?<div className={styles.noFriendTemplate}>
        Looks having no Friend ! 
        <div>Make Some ?</div>
      </div>:
      <div>
        {
          friends.map(obj => (
            <div key={obj.userName} className={styles.friendBox}>
              <Image className={styles.friendsProfile} height={65} width={65} alt='' src={obj.profile} />
              <div className={styles.names}>
                <div className={styles.userName}>{obj.userName}</div>
                <div className={styles.uid}>{obj.ffUid}</div>
              </div>
            </div>
          ))
        }
      </div>}
    </div>
  )
}

export default AllFriends
