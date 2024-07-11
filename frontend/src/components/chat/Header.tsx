import NavigateBack from '@/hooks/Navigate.back'
import Image from 'next/image'
import React from 'react'
import styles from './styles/header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <NavigateBack styles={{height: 17, width: 17, marginLeft: 10}}>
        <Image height={17} width={17} alt='back' src="/icons/arrowLeftWhite.png" />
      </NavigateBack>
      <div className={styles.friendName}> Khutta </div>
    </div>
  )
}

export default Header
