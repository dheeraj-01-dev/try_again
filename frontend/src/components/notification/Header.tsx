import React from 'react'
import HistroyBack from '../clients/HistroyBack'
import Image from 'next/image'
import styles from './styles/header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <HistroyBack styles={{display: "inline", height: 18}}>
        <Image width={18} height={18} alt='' src="/icons/arrowLeftWhite.png" />
      </HistroyBack>
      <span className={styles.notificationBanner}>Notifications</span>
    </div>
  )
}

export default Header
