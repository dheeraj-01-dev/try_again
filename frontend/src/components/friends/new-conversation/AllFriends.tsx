import Link from 'next/link'
import React from 'react'
import styles from './styles/allFriends.module.css'
import Image from 'next/image'

const AllFriends = () => {
  return (
    <div>
      <div className={styles.noFriendTemplate}>
        Looks having no Friend ! 
        <div>Make Some ?</div>
      </div>
      <div className={styles.addFriendBox}>
        <Link href="/friends/add">
          {/* <button className={styles.addFriendsBtn}> + Add </button> */}
          <Image className={styles.addFriendImg} width={60} height={60} alt='' src="/icons/add.png" />
        </Link>
      </div>
    </div>
  )
}

export default AllFriends
