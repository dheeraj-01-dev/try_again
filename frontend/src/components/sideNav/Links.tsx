"use client"
import React from 'react'
import Link from 'next/link'
import styles from './styles/links.module.css'
import { toggleSideNav } from '@/scripts/event-listener'
import { usePathname } from 'next/navigation'

const Links = () => {
  let pathName = usePathname();
  
  return (
    <div>
      <div className={styles.linkContainer}>
        <Link onClick={toggleSideNav} className={`${styles.links} ${pathName==="/"&&styles.active}`} href="/">Home</Link>
      </div>
      <div className={styles.linkContainer}><Link onClick={toggleSideNav} className={`${styles.links} ${pathName==="/contest"&&styles.active}`} href="/contest">Contest</Link></div>
      <div className={styles.linkContainer}><Link onClick={toggleSideNav} className={`${styles.links} ${pathName==="/profile"&&styles.active}`} href="/profile">Profile</Link></div>
      <div className={styles.linkContainer}><Link onClick={toggleSideNav} className={`${styles.links} ${pathName==="/friends"&&styles.active}`} href="/friends">Friends</Link></div>
      <div className={styles.linkContainer}><Link onClick={toggleSideNav} className={`${styles.links} ${pathName==="/refer"&&styles.active}`} href="/refer">Refral</Link></div>
      <div className={styles.linkContainer}><Link onClick={toggleSideNav} className={`${styles.links} ${pathName==="/support"&&styles.active}`} href="/support">Support</Link></div>
      <div className={styles.linkContainer}><Link onClick={toggleSideNav} className={`${styles.links} ${pathName==="/about"&&styles.active}`} href="/about">About us</Link></div>
      <div className={styles.linkContainer}><Link onClick={toggleSideNav} className={`${styles.links} ${pathName==="/terms"&&styles.active}`} href="/term">terms & condition</Link></div>
      <div className={styles.linkContainer}><Link onClick={toggleSideNav} className={`${styles.links} ${pathName==="/login"&&styles.active}`} href="/login">login</Link></div>
      <div className={styles.linkContainer}>Log Out</div>
    </div>
  )
}

export default Links
