import React from 'react'
import styles from './styles/profile.module.css'
import Link from 'next/link'
import { cookies } from 'next/headers'

const Profile = () => {

  const cookieStore = cookies();
  const isLogin = cookieStore.get("u_state");

  return(
    isLogin?
    <div className={styles.profileContainer}>
      <div className={styles.home}></div>
      <div className={styles.home}></div>
      <div className={styles.home}></div>
    </div>:
    <div>
      <div>
        <Link href="/login" className={styles.loginText}>login</Link>
      </div>
    </div>
  )
}

export default Profile
