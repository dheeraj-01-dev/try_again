"use client"
import React from 'react'
import styles from './styles/footer.module.css'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  const pathName = usePathname();
  let world, message, notification, profile, footer;
  if(pathName==="/friends"){message=true};
  if(pathName==="/friends/world"){world=true};
  if(pathName==="/friends/notification"){notification=true};
  if(pathName==="/friends/profile"){profile=true};
  if(pathName==="/friends/add"){footer=true}
  if(pathName==="/friends/new-conversation"){footer=true}
  console.log(pathName)
  return (
    <div style={footer?{display: "none"}:{}} className={styles.footerContainer}>
      <div className={`${styles.footerElements} ${world&&styles.active}`}>
        <Link href={"/friends/world"}><Image width={23} height={23} alt='m' src="/icons/world-a7.png" /></Link>
      </div>
      <div className={`${styles.footerElements} ${message&&styles.active}`}>
        <Link href={"/friends"}><Image width={23} height={23} alt='m' src="/icons/chat-a7.png" /></Link>
      </div>
      <div className={`${styles.footerElements} ${notification&&styles.active}`}>
        <Link href={"/friends/notification"}><Image width={23} height={23} alt='m' src="/icons/bell-a7.png" /></Link>
      </div>
      <div className={`${styles.footerElements} ${profile&&styles.active}`}>
        <Link href={"/friends/profile"}><Image width={23} height={23} alt='m' src="/icons/user-a7.png" /></Link>
      </div>
    </div>
  )
}

export default Footer
