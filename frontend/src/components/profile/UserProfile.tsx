import Image from 'next/image'
import React from 'react'
import styles from './styles/userProfile.module.css'

const UserProfile = ({style, name, uid}: {style?: React.CSSProperties, name: string, uid: number}) => {
  return (
    <div style={style}>
      <div className={styles.profileSection}>
        <Image className={styles.profilePic} width={100} height={100} alt='' src="/men.png" />
        <div className={styles.infoContainer}>
          <span>
            <div className={styles.name}>{name}</div>
            <div className={styles.uid}>{uid}</div>
          </span>
          <div className={styles.editSection}>
            <button className={styles.editProfileBtn}> Edit Profile</button>
            <button>
              <Image width={16} height={15} alt='' src="/icons/add-friend.png" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
