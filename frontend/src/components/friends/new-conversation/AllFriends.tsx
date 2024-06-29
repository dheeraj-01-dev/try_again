"use client"
import Link from 'next/link'
import React from 'react'
import styles from './styles/allFriends.module.css'
import Image from 'next/image'

const AllFriends = ({friends} : {friends: Array<any>}) => {

  const foucusTargetFriend =  async (e :any)=>{
    console.log(e.currentTarget.parentNode.children)
    for (let i = 0; i < e.currentTarget.parentNode.children.length; i++) {
      const elements = e.currentTarget.parentNode.children[i];
      console.log(elements)

      elements.classList.remove(styles.activeBorder);
      elements.children[1].classList.remove(styles.showActionBox);
    }
    e.currentTarget.classList.toggle(styles.activeBorder);
    e.currentTarget.children[1].classList.toggle(styles.showActionBox);
    }



  
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
            <div onClick={foucusTargetFriend} key={obj.userName} className={styles.friendBox}>
              <div className={styles.friendTemplate}>
                <Image className={styles.friendsProfile} height={65} width={65} alt='' src={obj.profile} />
                <div className={styles.names}>
                  <div className={styles.userName}>{obj.userName}</div>
                  <div className={styles.uid}>{obj.ffUid}</div>
                </div>
              </div>
              <div className={styles.actionBox}>
                <div className={styles.actions}>
                  <Image height={20} width={20} alt='' src="/icons/info.png" />
                </div>
                <div className={styles.actions}>
                  <Image height={20} width={20} alt='' src="/icons/chat.png" />
                </div>
                <div className={styles.actions}>
                  <Image height={20} width={20} alt='' src="/icons/user.png" />
                </div>
              </div>
            </div>
          ))
        }
      </div>}
    </div>
  )
}

export default AllFriends
