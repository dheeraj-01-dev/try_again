import React from 'react'
import styles from './styles/header.module.css'
import NavigateBack from '@/hooks/Navigate.back'
import Image from 'next/image'

const Header = () => {
  return (
    <div className={styles.headerBox}>
      <NavigateBack home styles={{height: 17, width: 17}}>
        <Image width={17} height={17} alt='back' src="/icons/arrowLeftWhite.png" />
      </NavigateBack>
      <div className={styles.teamsTemplate}> Teams </div>
    </div>
  )
}

export default Header
