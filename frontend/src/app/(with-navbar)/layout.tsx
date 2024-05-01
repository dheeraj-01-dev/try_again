import Navbar from '@/components/navbar/Navbar';
import React from 'react'

import styles from './layout.module.css'
import SideNav from '@/components/sideNav/SideNav';

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className={styles.navContainer}>
        <Navbar />
        <SideNav />
      </div>
      <div className={styles.navChilds}>
        {children}
      </div>
    </>
  )
}

export default layout
