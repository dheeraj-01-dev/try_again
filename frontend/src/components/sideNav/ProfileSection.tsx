import React from 'react'
import styles from './styles/profileSection.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'

const ProfileSection = () => {
  const cookieStore = cookies();
  const userToken :string | undefined = cookieStore.get("u_state")?.value;
  const decodedUser :any = userToken&&jwt.decode(userToken);
  const { name, ffUid } = decodedUser?decodedUser:{name: "", ffUid: ""};
  
  return (
    <div className={styles.profile}>
      {decodedUser?<Link href="/profile" className={styles.linkContainer}>
        <div className={styles.profilePic}>
          <Image height={60} width={60} alt='' unoptimized src="/men.png" />
          {/* <img src="/men.png" alt="" /> */}
        </div>
        <div className={styles.identity}>
          <div className={styles.name}>{name}</div>
          <div className={styles.uid}>{ffUid}</div>
        </div>
      </Link>:<div className={styles.loginContainer}>
        <Link className={styles.loginLink} href="/login"> Login </Link>
      </div>}
    </div>
  )
}

export default ProfileSection
