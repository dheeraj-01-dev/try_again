"use client"
import React from 'react'
import Link from 'next/link'
import styles from './styles/links.module.css'
import { toggleSideNav } from '@/scripts/event-listener'
import { usePathname, useRouter } from 'next/navigation'
import { deleteCookie } from 'cookies-next'
import Image from 'next/image'

const Links = () => {
  const router = useRouter();
  let pathName = usePathname();

  const logOut = ()=>{
    const outConfirm = confirm("confirm to log Out");
    if(outConfirm){
      deleteCookie("u_state")
      router.push("/");
      router.refresh();
      toggleSideNav();
    }
  }
  
  return (
    <div>
      <div className={styles.linkContainer}>
        <Link onClick={toggleSideNav} className={`${styles.links} ${pathName==="/"&&styles.active}`} href="/"><span className={styles.iconContainer}><Image width={20} height={20} alt='' src="/icons/home-a7.png" /></span>Home</Link>
      </div>
      <div className={styles.linkContainer}><Link onClick={toggleSideNav} className={`${styles.links} ${pathName==="/contest"&&styles.active}`} href="/contest"><span className={styles.iconContainer}><Image width={20} height={20} alt='' src="/icons/cart-a7.png" /></span>Contest</Link></div>
      <div className={styles.linkContainer}><Link onClick={toggleSideNav} className={`${styles.links} ${pathName==="/profile"&&styles.active}`} href="/profile"><span className={styles.iconContainer}><Image width={20} height={20} alt='' src="/icons/user-a7.png" /></span>Profile</Link></div>
      <div className={styles.linkContainer}><Link onClick={toggleSideNav} className={`${styles.links} ${pathName==="/friends"&&styles.active}`} href="/friends"><span className={styles.iconContainer}><Image width={20} height={15} alt='' src="/icons/friends-a7.png" /></span>Friends</Link></div>
      <div className={styles.linkContainer}><Link onClick={toggleSideNav} className={`${styles.links} ${pathName==="/refer"&&styles.active}`} href="/refer"><span className={styles.iconContainer}><Image width={20} height={20} alt='' src="/icons/share-a7.png" /></span>Refral</Link></div>
      <div className={styles.linkContainer}><Link onClick={toggleSideNav} className={`${styles.links} ${pathName==="/support"&&styles.active}`} href="/support"><span className={styles.iconContainer}><Image width={20} height={20} alt='' src="/icons/headset-a7.png" /></span>Support</Link></div>
      <div className={styles.linkContainer}><Link onClick={toggleSideNav} className={`${styles.links} ${pathName==="/about"&&styles.active}`} href="/about"><span className={styles.iconContainer}><Image width={13} height={20} alt='' src="/icons/terminal-a7.png" /></span>About us</Link></div>
      <div className={styles.linkContainer}><Link onClick={toggleSideNav} className={`${styles.links} ${pathName==="/terms"&&styles.active}`} href="/terms"><span className={styles.iconContainer}><Image width={13} height={20} alt='' src="/icons/terminal-a7.png" /></span>terms & condition</Link></div>
      <div className={styles.logoutContainer} onClick={logOut}><span className={styles.iconContainer}><Image width={20} height={20} alt='' src="/icons/logout-a7.png" /></span>Log Out</div>
    </div>
  )
}

export default Links
