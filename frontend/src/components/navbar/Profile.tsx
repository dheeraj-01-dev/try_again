import React from 'react'
import styles from './styles/profile.module.css'
import Link from 'next/link'
import { cookies } from 'next/headers'
import Image from 'next/image'

const Profile = async () => {

  const cookieStore = cookies();
  const isLogin = cookieStore.get("u_state");

  return(
    isLogin?
    <div className={styles.profileContainer}>
      <div className={styles.home}>
        <Link href={"/notification"}>
          <Image width={20} height={20} alt="profile" src="/icons/bell.png" />
        </Link>
      </div>
      <div className={styles.home}>
        <Link href={"/support"}>
          <Image width={20} height={20} alt="profile" src="/icons/headset.png" />
        </Link>
      </div>
      <div className={styles.home}>
        <Link className={styles.a} href={"/profile"}>
          {/* <Image height={30} width={32} loading='lazy' unoptimized alt="profile" src="/men.png" /> */}
          <Image height={20} width={20} loading='lazy' unoptimized alt="profile" src="/icons/user.png" />
        </Link>
      </div>
    </div>:
    <div>
      <div>
        <Link href="/login" className={styles.loginText}>login</Link>
      </div>
    </div>
  )
}

export default Profile
